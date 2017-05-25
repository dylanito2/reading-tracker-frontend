import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Account from './account'



const rootReducer = combineReducers({
  Students,
  Account,
  router: routerReducer

})

export default rootReducer
