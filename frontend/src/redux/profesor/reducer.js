import {
    GET_ALL_PROFESORES_START,
    GET_ALL_PROFESORES_COMPLETE,
    GET_ALL_PROFESORES_ERROR,
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    error: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PROFESORES_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case GET_ALL_PROFESORES_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case GET_ALL_PROFESORES_COMPLETE:
            {
                return {
                    ...state,
                    data: action.profesores,
                    isLoading: false,
                    error: null
                }
            }
        default:
            return state
    }
}