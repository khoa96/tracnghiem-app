import { all } from 'redux-saga/effects';
import registerSaga from './registerSaga';

export default function * rootSaga () {
    yield all ([
        registerSaga()
    ])
}