import {
    GET_EMPLOYEE_LIST,
    GET_EMPLOYEE_LIST_SUCCESS,
    GET_EMPLOYEE_LIST_ERROR,
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_ERROR,
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_ERROR,
    EDIT_EMPLOYEE,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_ERROR,
    SEARCH_EMPLOYEE
} from './action'

const initialState = {
    employees: [],
    loading: false,
    keyword: '',
    error: ''
}

export default function(state = initialState, { type, payload }) {
    switch(type){
        case CREATE_EMPLOYEE: 
            return {
                ...state,
                loading: true
            }
        case CREATE_EMPLOYEE_SUCCESS: 
            return {
                ...state,
                employees: [...state.employees, payload],
                loading: false,
            }
        case CREATE_EMPLOYEE_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case GET_EMPLOYEE_LIST: 
            return {
                ...state,
                loading: true
            }
        case GET_EMPLOYEE_LIST_SUCCESS: 
            return {
                ...state,
                employees: payload,
                loading: false,
            }
        case GET_EMPLOYEE_LIST_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case DELETE_EMPLOYEE: 
            return {
                ...state,
                loading: true
            }
        case DELETE_EMPLOYEE_SUCCESS: 
            return {
                ...state,
                employees: state.employees.filter(item => item._id !== payload),
                loading: false,
            }
        case DELETE_EMPLOYEE_ERROR: 
            return {
                ...state,
                error: payload
            }
        case EDIT_EMPLOYEE: 
            return {
                ...state,
                loading: true
            }
        case EDIT_EMPLOYEE_SUCCESS: {
            let newEmployee = state.employees.filter(item => item._id !== payload.id)
            newEmployee.push(payload.editUser)
            return {
                ...state,
                employees:  newEmployee,
                loading: false,
            }
        }
        case EDIT_EMPLOYEE_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case SEARCH_EMPLOYEE: {
            const reg = new RegExp(payload.toLowerCase(), 'ig')
            return {
                ...state,
                filtredEmployee: state.employees.filter(item => item.name.toLowerCase().match(reg)),
                filter: payload === '' ? false : true
            }
        }
        default: 
            return {
                ...state
            }
    }
}