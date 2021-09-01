import {
    GET_ALL_PROFESORES_START,
    GET_ALL_PROFESORES_COMPLETE,
    GET_ALL_PROFESORES_ERROR,
    ADD_PROFESOR_START,
    ADD_PROFESOR_ERROR,
    ADD_PROFESOR_COMPLETE,
    CLEAN_ERROR
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    errorGlobal: null,
    status: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PROFESORES_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null
                }
            }
        case GET_ALL_PROFESORES_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                }
            }
        case GET_ALL_PROFESORES_COMPLETE:
            {
                return {
                    ...state,
                    data: action.profesores,
                    isLoading: false,
                    errorGlobal: null,
                }
            }
        case ADD_PROFESOR_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    status: 'initial'
                }
            }
        case ADD_PROFESOR_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    status: 'failed'
                }
            }
        case ADD_PROFESOR_COMPLETE:
            {
                return {
                    ...state,
                    data: [...state.data, action.profesor],
                    isLoading: false,
                    errorGlobal: null,
                    status: 'success'
                }
            }
        //para limpiar el estado
        case CLEAN_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: null,
                    status: null
                }
            }
        default:
            return state
    }
}