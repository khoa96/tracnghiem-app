import {combineReducers} from 'redux';
import registerReducer from '../reducer/RegisterReducer';
import loginReducer from '../reducer/LoginReducer';

const rootReducer = combineReducers({
    registerReducer,
    loginReducer
})

export default rootReducer;