import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupThunk } from '../redux/Users/thunks'
import { bindActionCreators } from 'redux';
import { validateEmail } from '../utils/validate';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Employeer Control
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
})

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirmPassword: '',
            username: '',
            email: '',
            confirmError: false,
            emailError: false,
        }
    }

    signup = (event) => {
        event.preventDefault()
        const confirmationPassword = this.state.password === this.state.confirmPassword
        if(!confirmationPassword) {
            this.setState({ confirmError: true })
            return 
        }
        const emailValid = validateEmail(this.state.email)
        if(!emailValid) {
            this.setState({ emailError: true })
            return
        }

        const signUpBody = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        }

        this.props.signup(signUpBody)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { classes } = this.props
        const { confirmError, confirmPassword, username, email, password, emailError } = this.state

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={this.signup}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    error={emailError}
                    helperText={emailError ? "Email is not valid" : '' }
                    onChange={this.handleChange}
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirmPassword"
                    helperText={ confirmError ? "Password is not coincides" : "" }
                    error={confirmError}
                    value={confirmPassword}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link to='/signin' variant="body2">
                        Back to login
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    signup: bindActionCreators(signupThunk, dispatch)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignUp))