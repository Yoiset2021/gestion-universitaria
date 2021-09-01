import {
    GET_ALL_PROFESORES_START,
    ADD_PROFESOR_START,
    CLEAN_ERROR
} from './type'


export const getAllProfesores = payload => ({
    type: GET_ALL_PROFESORES_START,
    payload
})

export const addProfesor = payload => ({
    type: ADD_PROFESOR_START,
    payload
})

export const cleanError = () => ({
    type: CLEAN_ERROR
})