import { takeLatest, call, put } from 'redux-saga/effects';
import { REGISTER_USER } from '../constanst/actionTypes';
import { registerUser } from '../api/userAPI';
import axios from 'axios';
import { registerUserError, registerUserSuccess } from '../actions/index';

function* workSagaRegister(action) {
    const user = action.payload;
    yield axios.post("https://server-login-app.herokuapp.com/api/users", user).then(response => {
        console.log(response)
    }).catch(e => {
        console.log(e)
    })
}

export default function* watchSagaRegister() {
    yield takeLatest(REGISTER_USER, workSagaRegister)
}