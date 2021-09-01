import {
    GET_ALL_GRUPOS_START,
    GET_ALL_GRUPOS_COMPLETE,
    GET_ALL_GRUPOS_ERROR,
    ADD_GRUPO_COMPLETE,
    ADD_GRUPO_ERROR,
    EDIT_GRUPO_COMPLETE,
    EDIT_GRUPO_ERROR,
    DELETE_GRUPO_START,
    DELETE_GRUPO_COMPLETE,
    DELETE_GRUPO_ERROR,
    HANDLE_SUBMIT_GRUPO,
    FORM_SERVER_ERROR,
    CLEAN_ERROR
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    errorGlobal: null,
    errorServer: {},
    status: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_GRUPOS_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        case GET_ALL_GRUPOS_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {}
                }
            }
        case GET_ALL_GRUPOS_COMPLETE:
            {
                return {
                    ...state,
                    data: action.grupos,
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        /* ADD GRUPOS */
        //para comenzar a manejar edit y add grupo
        case HANDLE_SUBMIT_GRUPO:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {},
                    status: 'initial'
                }
            }
        case ADD_GRUPO_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {},
                    status: 'failed'
                }
            }
        case ADD_GRUPO_COMPLETE:
            {
                return {
                    ...state,
                    data: [...state.data, action.grupo],
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {},
                    status: 'success'
                }
            }
        //para el error que viene del server en el formulario
        case FORM_SERVER_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: action.error,
                    status: 'failed'
                }
            }
        //para limpiar el estado
        case CLEAN_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {},
                    status: null
                }
            }
        /* EDIT GRUPOS */
        case EDIT_GRUPO_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {},
                    status: 'failed'
                }
            }
        case EDIT_GRUPO_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.map(est => est._id === action.grupo._id ? est = action.grupo : est),
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {},
                    status: 'success'
                }
            }
        /* DELET GRUPOS */
        case DELETE_GRUPO_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        case DELETE_GRUPO_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {}
                }
            }
        case DELETE_GRUPO_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.filter(est => est._id !== action.grupo._id),
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        default:
            return state
    }
}