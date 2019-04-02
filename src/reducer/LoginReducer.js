import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from '../constanst/actionTypes';

const initialState = {
    isLoading: false,
    message: ""
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}