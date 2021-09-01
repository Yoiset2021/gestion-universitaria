import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_CIUDADES_START,
    GET_ALL_CIUDADES_COMPLETE,
    GET_ALL_CIUDADES_ERROR,
    ADD_CIUDAD_START,
    ADD_CIUDAD_COMPLETE,
    ADD_CIUDAD_ERROR,
} from './type'
import { getAll, add } from './service'

export function* getAllCiudades() {
    try {
        const ciudades = yield call(getAll)
        yield put({ type: GET_ALL_CIUDADES_COMPLETE, ciudades })
    } catch (error) {
        yield put({ type: GET_ALL_CIUDADES_ERROR, error })
    }
}

export function* addCiudad({ payload }) {
    try {
        const ciudad = yield call(add, payload)
        yield put({ type: ADD_CIUDAD_COMPLETE, ciudad })
    } catch (err) {
        yield put({ type: ADD_CIUDAD_ERROR, err })
    }
}

export default function* ciudades() {
    yield takeLatest(GET_ALL_CIUDADES_START, getAllCiudades)
    yield takeLatest(ADD_CIUDAD_START, addCiudad)
}