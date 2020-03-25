import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory';
import userReducer from './Users/reducer'
import employeeReducer from './Employee/reducer'


export const history = createHistory();

export default combineReducers({
    router: connectRouter(history),
    user: userReducer,
    employees: employeeReducer,
});