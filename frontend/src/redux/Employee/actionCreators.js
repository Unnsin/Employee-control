import {
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_ERROR,
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_ERROR,
    EDIT_EMPLOYEE,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_ERROR,
    GET_EMPLOYEE_LIST,
    GET_EMPLOYEE_LIST_SUCCESS,
    GET_EMPLOYEE_LIST_ERROR,
    SEARCH_EMPLOYEE
} from './action'

export const create_employee = () => ({
    type: CREATE_EMPLOYEE
})

export const create_employee_success = (newEmployee) => ({
    type: CREATE_EMPLOYEE_SUCCESS,
    payload: newEmployee
})

export const create_employee_error = (err) => ({
    type: CREATE_EMPLOYEE_ERROR,
    payload: err
})

export const delete_employee = () => ({
    type: DELETE_EMPLOYEE
})

export const delete_employee_success = (id) => ({
    type: DELETE_EMPLOYEE_SUCCESS,
    payload: id
})

export const delete_employee_error = (err) => ({
    type: DELETE_EMPLOYEE_ERROR,
    payload: err
})

export const edit_employee = () => ({
    type: EDIT_EMPLOYEE
})

export const edit_employee_success = (id, editedEmployee) => ({
    type: EDIT_EMPLOYEE_SUCCESS,
    payload: {
        id: id,
        editUser: editedEmployee
    }
})

export const edit_employee_error = (err) => ({
    type: EDIT_EMPLOYEE_ERROR,
    payload: err
})

export const get_employee_list = () => ({
    type: GET_EMPLOYEE_LIST
})

export const get_employee_list_success = (list) => ({
    type: GET_EMPLOYEE_LIST_SUCCESS,
    payload: list
})

export const get_employee_list_error = (err) => ({
    type: GET_EMPLOYEE_LIST_ERROR,
    payload: err
})

export const searchEmployee = (keyword) => ({
    type: SEARCH_EMPLOYEE,
    payload: keyword
})