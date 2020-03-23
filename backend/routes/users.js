var express = require('express');
var bcrypt = require('bcrypt')
var ExpressJwt = require('express-jwt');
var JWT = require('jsonwebtoken')
var userMethod = require('../db/methods/user.method')

const salt = process.env.salt

var router = express.Router();

router.use(ExpressJwt({ secret: process.env.SECRET_KEY}))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function(req, res, next){
  var user = req.body
  user.password = await bcrypt.hash(user.password, salt)
  user.token = await JWT.sign({email: user.email}, process.env.SECRET_KEY)
  const created = await userMethod.CreateUser(user)
  if(created) {
    res.status(201).send(created)
  } else {
    res.status(500).send()
  }
})

router.post('/signin', async function(req, res, next){
  const body = req.body
  const user = await userMethod.GetUser(body.email)
  if(!user) {
    res.status(401).send('User not found')
  }
  const result = await bcrypt.compare(body.password, user.password)
  if(result){
    const token = await JWT.sign({ email: body.email }, process.env.SECRET_KEY)
    const updateUser = await userMethod.UpdateToken(body.email, token)
    if(updateUser){
      res.status(200).send(updateUser)
    } else {
      res.status(500).send('Something went wrong')
    }
  } else {
    res.status(500).send('Password wrong')
  }
})

router.get('/logout', function(req, res, next){
  const userId = req.user._id
  userMethod.Logout(userId)
    .then(() => {
      res.status(200).send()
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

module.exports = router;
