import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_GRUPOS_START,
    GET_ALL_GRUPOS_COMPLETE,
    GET_ALL_GRUPOS_ERROR,
    FORM_SERVER_ERROR,
    HANDLE_SUBMIT_GRUPO,
    ADD_GRUPO_COMPLETE,
    ADD_GRUPO_ERROR,
    EDIT_GRUPO_ERROR,
    EDIT_GRUPO_COMPLETE,
    DELETE_GRUPO_START,
    DELETE_GRUPO_COMPLETE,
    DELETE_GRUPO_ERROR
} from './type'
import { getAll, add, edit, delet } from './service'

export function* getAllGrupos() {
    try {
        const grupos = yield call(getAll)
        yield put({ type: GET_ALL_GRUPOS_COMPLETE, grupos })
    } catch (error) {
        yield put({ type: GET_ALL_GRUPOS_ERROR, error })
    }
}

export function* handleSubmitGrupo({ payload }) {
    if (!payload._id) {
        try {
            const grupo = yield call(add, payload)
            yield put({ type: ADD_GRUPO_COMPLETE, grupo })
        } catch (err) {
            if (err.response.data.error) {
                const error = err.response.data.error
                yield put({ type: FORM_SERVER_ERROR, error })
            } else {
                yield put({ type: ADD_GRUPO_ERROR, err })
            }
        }
    } else {
        try {
            const grupo = yield call(edit, payload)
            yield put({ type: EDIT_GRUPO_COMPLETE, grupo })
        } catch (err) {
            if (err.response.data.error) {
                const error = err.response.data.error
                yield put({ type: FORM_SERVER_ERROR, error })
            } else {
                yield put({ type: EDIT_GRUPO_ERROR, err })
            }
        }
    }
}

export function* deleteGrupo({ payload }) {
    try {
        const grupo = yield call(delet, payload)
        yield put({ type: DELETE_GRUPO_COMPLETE, grupo })
    } catch (error) {
        yield put({ type: DELETE_GRUPO_ERROR, error })
    }
}


export default function* grupos() {
    yield takeLatest(GET_ALL_GRUPOS_START, getAllGrupos)
    yield takeLatest(HANDLE_SUBMIT_GRUPO, handleSubmitGrupo)
    yield takeLatest(DELETE_GRUPO_START, deleteGrupo)
}