import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CssBaseline from '@material-ui/core/CssBaseline';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { getEmployeeList, deleteEmployee } from '../redux/Employee/thunks'
import NewEmployeeForm from '../component/NewEmployeeForm';
import { bindActionCreators } from 'redux';


function createData(name, gender, phone, created, salary, position) {
    return { name, gender, phone, created, salary, position };
}

const rows = [
    createData('Lesnoy Vladislav Sergeevich', 'male', '0660001292', '24-10-2020', 1700, 'Developer'),
];

const styles = {
    table: {
        minWidth: 650,
    },
    button: {
        marginBottom: 20,
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            editForm: false,
            editUser: {},
        }
    }

    componentDidMount() {
        this.props.getEmployeeList()
    }

    showForm = (bool) => () => {
        this.setState({ showForm: bool })
    }


    editUserForm = (user) => () => {
        this.setState({editForm: true, editUser: user, showForm: true})
    }

    render() {
        const { classes, employees } = this.props
        const { showForm, editForm, editUser }  = this.state

        return (
            <>
                <Grid container  justify="center" >
                    <h2>Dashboard</h2>
                </Grid>
                <Grid container>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<AddCircleOutlineIcon />}
                        onClick={this.showForm(true)}
                    >
                        New employee
                    </Button>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Full name</TableCell>
                                <TableCell align="center">Gender</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Created</TableCell>
                                <TableCell align="center">Salary</TableCell>
                                <TableCell align="center">Position</TableCell>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {employees.map(row => (
                                <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.gender}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.created}</TableCell>
                                <TableCell align="center">{row.salary}</TableCell>
                                <TableCell align="center">{row.position}</TableCell>
                                <TableCell align="center">
                                    <IconButton aria-label="Edit" className={classes.margin} onClick={this.editUserForm(row)}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => this.props.deleteEmployee(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <CssBaseline />
                {showForm  && (
                    <Grid container>
                        <Grid item xs={2} />
                        <Grid item xs={8} >
                            <NewEmployeeForm cancelForm={this.showForm(false)}  editForm={editForm} editUser={editUser}/>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                )
                }
            </>
        )
    }
}

const mapStateToDispatch = state => ({
    employees: state.employees.employees
})

const mapDispatchToProps = dispatch => ({
    getEmployeeList: bindActionCreators(getEmployeeList, dispatch),
    deleteEmployee: bindActionCreators(deleteEmployee, dispatch)
})

export default withStyles(styles)(connect(mapStateToDispatch, mapDispatchToProps)(Dashboard))