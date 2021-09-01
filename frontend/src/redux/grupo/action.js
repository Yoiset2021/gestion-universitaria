import {
    GET_ALL_GRUPOS_START,
    HANDLE_SUBMIT_GRUPO,
    DELETE_GRUPO_START,
    CLEAN_ERROR
} from './type'


export const getAllGrupos = payload => ({
    type: GET_ALL_GRUPOS_START,
    payload
})

export const handleSubmitGrupo = payload => ({
    type: HANDLE_SUBMIT_GRUPO,
    payload
})

export const deleteGrupo = payload => ({
    type: DELETE_GRUPO_START,
    payload
})

export const cleanError = () => ({
    type: CLEAN_ERROR,
})