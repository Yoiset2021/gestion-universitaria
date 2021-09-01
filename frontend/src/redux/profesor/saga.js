import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_PROFESORES_START,
    GET_ALL_PROFESORES_COMPLETE,
    GET_ALL_PROFESORES_ERROR,
} from './type'
import { getAll } from './service'

export function* getAllProfesores() {
    try {
        const profesores = yield call(getAll)
        yield put({ type: GET_ALL_PROFESORES_COMPLETE, profesores })
    } catch (error) {
        yield put({ type: GET_ALL_PROFESORES_ERROR, error })
    }
}

export default function* profesores() {
    yield takeLatest(GET_ALL_PROFESORES_START, getAllProfesores)
}