import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from '../constanst/actionTypes';

const initialState = {
    isLoading: false,
    isLoginSuccess: "",
    user: null
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:    
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_USER_SUCCESS:    
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                isLoginSuccess: true
            }
        case LOGIN_USER_ERROR:  
            return {
                ...state,
                isLoading: true,
                isLoginSuccess: false
            }
        default:
            return state
    }
}