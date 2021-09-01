import {
    GET_ALL_CIUDADES_START,
    ADD_CIUDAD_START,
    CLEAN_ERROR
} from './type'


export const getAllCiudades = payload => ({
    type: GET_ALL_CIUDADES_START,
    payload
})

export const addCiudad = payload => ({
    type: ADD_CIUDAD_START,
    payload
})

export const cleanError = () => ({
    type: CLEAN_ERROR
})
