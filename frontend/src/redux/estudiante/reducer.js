import {
    GET_ALL_ESTUDIANTES_START,
    GET_ALL_ESTUDIANTES_COMPLETE,
    GET_ALL_ESTUDIANTES_ERROR,
    HANDLE_SUBMIT_ESTUDIANTE,
    ADD_ESTUDIANTE_COMPLETE,
    ADD_ESTUDIANTE_ERROR,
    FORM_SERVER_ERROR,
    CLEAN_ERROR,
    EDIT_ESTUDIANTE_COMPLETE,
    EDIT_ESTUDIANTE_ERROR,
    DELETE_ESTUDIANTE_START,
    DELETE_ESTUDIANTE_COMPLETE,
    DELETE_ESTUDIANTE_ERROR
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
        case GET_ALL_ESTUDIANTES_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        case GET_ALL_ESTUDIANTES_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {}
                }
            }
        case GET_ALL_ESTUDIANTES_COMPLETE:
            {
                return {
                    ...state,
                    data: action.estudiantes,
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        // ADD ESTUDIANTES 
        //para comenzar a manejar edit y add estudiante
        case HANDLE_SUBMIT_ESTUDIANTE:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {},
                    status: 'initial'
                }
            }
        case ADD_ESTUDIANTE_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {},
                    status: 'failed'
                }
            }
        case ADD_ESTUDIANTE_COMPLETE:
            {
                return {
                    ...state,
                    data: [...state.data, action.estudiante],
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

        /* EDIT ESTUDIANTES */
        case EDIT_ESTUDIANTE_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {},
                    status: 'failed'
                }
            }
        case EDIT_ESTUDIANTE_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.map(est => est._id === action.estudiante._id ? est = action.estudiante : est),
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {},
                    status: 'success'
                }
            }
        /* DELET ESTUDIANTES */
        case DELETE_ESTUDIANTE_START:
            {
                return {
                    ...state,
                    isLoading: true,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        case DELETE_ESTUDIANTE_ERROR:
            {
                return {
                    ...state,
                    isLoading: false,
                    errorGlobal: action.error,
                    errorServer: {}
                }
            }
        case DELETE_ESTUDIANTE_COMPLETE:
            {
                return {
                    ...state,
                    data: state.data.filter(est => est._id !== action.estudiante._id),
                    isLoading: false,
                    errorGlobal: null,
                    errorServer: {}
                }
            }
        default:
            return state
    }
}