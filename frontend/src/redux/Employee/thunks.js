import { 
    create_employee, 
    create_employee_success, 
    create_employee_error,
    get_employee_list,
    get_employee_list_success,
    get_employee_list_error,
    delete_employee,
    delete_employee_success,
    delete_employee_error,
    edit_employee,
    edit_employee_success,
    edit_employee_error
} from './actionCreators'

export const createEmployeeThunks = (employee) => dispatch => {
    dispatch(create_employee())
    fetch('http://localhost:5000/employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(employee)
    })
        .then(res => res.json())
        .then(res => dispatch(create_employee_success(res)))
        .catch(err => dispatch(create_employee_error(err)))
}

export const getEmployeeList = () => dispatch => {
    dispatch(get_employee_list())
    fetch('http://localhost:5000/employee', { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        .then(res => res.json())
        .then(res => dispatch(get_employee_list_success(res)))
        .catch(err => dispatch(get_employee_list_error(err)))
}

export const deleteEmployee = (id) => dispatch => {
    dispatch(delete_employee())
    fetch(`http://localhost:5000/employee/${id}`, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        .then(res => {
            if(res.ok){
                dispatch(delete_employee_success(id));
            }
            return res
        })
        .catch(err => dispatch(delete_employee_error(err)))
}

export const editEmployee = (id, editBody) => dispatch => {
    dispatch(edit_employee())
    fetch(`http://localhost:5000/employee/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(editBody)
    })
        .then(res => res.json())
        .then(res => dispatch(edit_employee_success(id, res)))
        .catch(err => dispatch(edit_employee_error(err)))
}