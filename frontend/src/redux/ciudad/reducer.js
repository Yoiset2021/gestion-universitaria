import {
    GET_ALL_CIUDADES_START,
    GET_ALL_CIUDADES_COMPLETE,
    GET_ALL_CIUDADES_ERROR,
    ADD_CIUDAD_START,
    ADD_CIUDAD_ERROR,
    ADD_CIUDAD_COMPLETE,
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
        case GET_ALL_CIUDADES_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        case GET_ALL_CIUDADES_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                }
            }
        case GET_ALL_CIUDADES_COMPLETE:
            {
                return {
                    ...state,
                    data: action.ciudades,
                    isLoading: false,
                    errorGlobal: null,
                }
            }
        case ADD_CIUDAD_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    status: 'initial'
                }
            }
        case ADD_CIUDAD_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    status: 'failed'
                }
            }
        case ADD_CIUDAD_COMPLETE:
            {
                return {
                    ...state,
                    data: [...state.data, action.ciudad],
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