import { loginReducer } from './loginReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    login: loginReducer,
    users: userReducer
});

export default allReducers;