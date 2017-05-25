import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'

const rootReducer = combineReducers({
  Students, router: routerReducer
})

export default rootReducer
