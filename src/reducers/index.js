import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Student from './student'
import Account from './account'
import Classrooms from './classrooms'
import ReadingLevel from './reading_level'


const rootReducer = combineReducers({
  Students,
  Account,
  Classrooms,
  Student,
  ReadingLevel,
  router: routerReducer

})

export default rootReducer
