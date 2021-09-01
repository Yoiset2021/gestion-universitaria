import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_PROFESORES_START,
    GET_ALL_PROFESORES_COMPLETE,
    GET_ALL_PROFESORES_ERROR,
    ADD_PROFESOR_START,
    ADD_PROFESOR_COMPLETE,
    ADD_PROFESOR_ERROR
} from './type'
import { getAll, add } from './service'

export function* getAllProfesores() {
    try {
        const profesores = yield call(getAll)
        yield put({ type: GET_ALL_PROFESORES_COMPLETE, profesores })
    } catch (error) {
        yield put({ type: GET_ALL_PROFESORES_ERROR, error })
    }
}

export function* addProfesor({ payload }) {
    try {
        const profesor = yield call(add, payload)
        yield put({ type: ADD_PROFESOR_COMPLETE, profesor })
    } catch (err) {
        yield put({ type: ADD_PROFESOR_ERROR, err })
    }
}
export default function* profesores() {
    yield takeLatest(GET_ALL_PROFESORES_START, getAllProfesores)
    yield takeLatest(ADD_PROFESOR_START, addProfesor)
}
