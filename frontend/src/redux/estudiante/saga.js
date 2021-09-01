import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_ESTUDIANTES_START,
    GET_ALL_ESTUDIANTES_COMPLETE,
    GET_ALL_ESTUDIANTES_ERROR,
    ADD_ESTUDIANTE_COMPLETE,
    ADD_ESTUDIANTE_ERROR,
    FORM_SERVER_ERROR,
    HANDLE_SUBMIT_ESTUDIANTE,
    EDIT_ESTUDIANTE_ERROR,
    EDIT_ESTUDIANTE_COMPLETE,
    DELETE_ESTUDIANTE_START,
    DELETE_ESTUDIANTE_COMPLETE,
    DELETE_ESTUDIANTE_ERROR
} from './type'
import { getAll, add, edit, delet } from './service'

export function* getAllEstudiantes() {
    try {
        const estudiantes = yield call(getAll)
        yield put({ type: GET_ALL_ESTUDIANTES_COMPLETE, estudiantes })
    } catch (error) {
        yield put({ type: GET_ALL_ESTUDIANTES_ERROR, error })
    }
}

export function* handleSubmitEstudiante({ payload }) {
    if (!payload._id) {
        try {
            const estudiante = yield call(add, payload)
            yield put({ type: ADD_ESTUDIANTE_COMPLETE, estudiante })
        } catch (err) {
            if (err.response.data.error) {
                const error = err.response.data.error
                yield put({ type: FORM_SERVER_ERROR, error })
            } else {
                yield put({ type: ADD_ESTUDIANTE_ERROR, err })
            }
        }
    } else {
        try {
            const estudiante = yield call(edit, payload)
            yield put({ type: EDIT_ESTUDIANTE_COMPLETE, estudiante })
        } catch (err) {
            if (err.response.data.error) {
                const error = err.response.data.error
                yield put({ type: FORM_SERVER_ERROR, error })
            } else {
                yield put({ type: EDIT_ESTUDIANTE_ERROR, err })
            }
        }
    }
}


export function* deleteEstudiante({ payload }) {
    try {
        const estudiante = yield call(delet, payload)
        yield put({ type: DELETE_ESTUDIANTE_COMPLETE, estudiante })
    } catch (error) {
        yield put({ type: DELETE_ESTUDIANTE_ERROR, error })
    }
}


export default function* estudiantes() {
    yield takeLatest(GET_ALL_ESTUDIANTES_START, getAllEstudiantes)
    yield takeLatest(HANDLE_SUBMIT_ESTUDIANTE, handleSubmitEstudiante)
    yield takeLatest(DELETE_ESTUDIANTE_START, deleteEstudiante)
}