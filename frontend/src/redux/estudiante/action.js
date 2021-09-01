import {
    GET_ALL_ESTUDIANTES_START,
    HANDLE_SUBMIT_ESTUDIANTE,
    DELETE_ESTUDIANTE_START,
    CLEAN_ERROR
} from './type'


export const getAllEstudiantes = payload => ({
    type: GET_ALL_ESTUDIANTES_START,
    payload
})

export const handleSubmitEstudiante = payload => ({
    type: HANDLE_SUBMIT_ESTUDIANTE,
    payload
})

export const deleteEstudiante = payload => ({
    type: DELETE_ESTUDIANTE_START,
    payload
})
export const cleanError = () => ({
    type: CLEAN_ERROR
})
