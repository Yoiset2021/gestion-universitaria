import {
    GET_ALL_CIUDADES_START,
    GET_ALL_CIUDADES_COMPLETE,
    GET_ALL_CIUDADES_ERROR,
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    error: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CIUDADES_START:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: true,
                    error: null
                }
            }
        case GET_ALL_CIUDADES_ERROR:
            {
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    error: action.error
                }
            }
        case GET_ALL_CIUDADES_COMPLETE:
            {
                return {
                    ...state,
                    data: action.ciudades,
                    isLoading: false,
                    error: null
                }
            }
        default:
            return state
    }
}