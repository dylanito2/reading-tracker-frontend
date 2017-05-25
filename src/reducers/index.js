import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Student from './student'
import Account from './account'
import Classrooms from './classrooms'



const rootReducer = combineReducers({
  Students,
  Account,
  Classrooms,
  Student,
  router: routerReducer

})

export default rootReducer
