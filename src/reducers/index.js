import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Student from './student'
import Account from './account'



const rootReducer = combineReducers({
  Students,
  Account,
  Student,
  router: routerReducer

})

export default rootReducer
