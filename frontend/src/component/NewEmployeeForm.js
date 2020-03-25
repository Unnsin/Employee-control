import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { connect } from'react-redux'
import { createEmployeeThunks, editEmployee } from '../redux/Employee/thunks'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';

const styles = (theme) =>  ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
})

class NewEmployeeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            gender: '',
            phone: '',
            salary: 0,
            position: '',
        }
    }

    componentDidMount() {
        if(this.props.editForm){
            this.setState({ ...this.props.editUser })
        }
    }

    addNewEmployee = (event) => {
        event.preventDefault()
        if(this.props.editForm) {
            this.props.editEmployee(this.props.editUser._id, this.state)
        } else {
            this.props.createEmployee(this.state)
        }
        this.setState({
            name: '',
            gender: '',
            phone: '',
            salary: 0,
            position: ''
        })
        this.props.cancelForm()
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    render() {
        const { classes } = this.props
        const {
            name,
            phone,
            gender,
            salary,
            position
        } = this.state

        return (
                <form className={classes.form} noValidate onSubmit={this.addNewEmployee}>
                    <Grid container direction="row" spacing={4}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="fullName"
                                label="Full name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="phone"
                                label="Phone"
                                name="phone"
                                value={phone}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item>
                            <Grid  
                                container 
                                direction="column"
                                justify="center"
                                alignItems="center"
                                style={{ marginTop: 15 }}
                            >
                                <Grid item>
                                    <FormLabel component="legend">Gender</FormLabel>
                                </Grid>
                                <Grid item>
                                    <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={this.handleChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="salary"
                                label="Salary"
                                name="salary"
                                value={salary}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="position"
                                label="Postion"
                                name="position"
                                value={position}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                                endIcon={<AddIcon />}
                            >
                                { !this.props.editForm ? 'Add Employee' : 'Save Change' }
                            </Button>
                        </Grid>
                    </ Grid>
                </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createEmployee: bindActionCreators(createEmployeeThunks, dispatch),
    editEmployee: bindActionCreators(editEmployee, dispatch)
})

export default withStyles(styles)(connect(null, mapDispatchToProps)(NewEmployeeForm))