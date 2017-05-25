import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Account from './account'
import Classrooms from './classrooms'



const rootReducer = combineReducers({
  Students,
  Account,
  Classrooms,
  router: routerReducer

})

export default rootReducer
