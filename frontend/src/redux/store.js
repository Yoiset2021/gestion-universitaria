import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'
import estudiante from './estudiante/reducer'
import grupo from './grupo/reducer'
import ciudad from './ciudad/reducer'
import profesor from './profesor/reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    estudiante,
    grupo,
    ciudad,
    profesor
})

const sagaMiddleware = createSagaMiddleware()

export default function store() {
    return {
        ...createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}