import { 
    REGISTER_USER, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR 
} from '../constanst/actionTypes';

const initialState = {
    isLoading: false,
    user: null,
    message: "",
    isRegisterSuccess: ""
}

export default function registerReducer (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER: 
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                isRegisterSuccess: true
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                message: action.payload,
                isRegisterSuccess: false
            }
            
        default:
            return state
    }
}