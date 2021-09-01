import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_CIUDADES_START,
    GET_ALL_CIUDADES_COMPLETE,
    GET_ALL_CIUDADES_ERROR,
} from './type'
import { getAll } from './service'

export function* getAllCiudades() {
    try {
        const ciudades = yield call(getAll)
        yield put({ type: GET_ALL_CIUDADES_COMPLETE, ciudades })
    } catch (error) {
        yield put({ type: GET_ALL_CIUDADES_ERROR, error })
    }
}

export default function* ciudades() {
    yield takeLatest(GET_ALL_CIUDADES_START, getAllCiudades)
}