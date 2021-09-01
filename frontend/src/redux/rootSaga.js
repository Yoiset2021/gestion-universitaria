import { all } from 'redux-saga/effects'

import estudiante from './estudiante/saga'
import grupo from './grupo/saga'
import ciudad from './ciudad/saga'
import profesor from './profesor/saga'

export default function* rootSaga() {
    yield all([
        estudiante(),
        grupo(),
        ciudad(),
        profesor()
    ])
}