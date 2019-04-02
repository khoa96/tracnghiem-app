import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../constanst/actionTypes';

// ham dang ki 1 user
export const registerUserAction = (payload) => {
   // console.log(payload) // khi dispatchss 1 hanh dong ==> thi no se vao hanh dong truoc ==> sau do moi vao saga.
    return {
        type: REGISTER_USER,
        payload
    }
}

export const registerUserSuccess = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

export const registerUserError = (payload) => {
    return {
        type: REGISTER_USER_ERROR,
        payload
    }
}

export const loginUseAction = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

export const loginUserSuccess = (payload) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
}

export const loginUserError = (payload) => {
    return {
        type: LOGIN_USER_ERROR,
        payload
    }
}