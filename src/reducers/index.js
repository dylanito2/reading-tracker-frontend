import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Students from './students'
import Student from './student'
import Account from './account'
import Classrooms from './classrooms'
import StudentSearch from './StudentSearch'
import ReadingLevel from './reading_level'
import Toggle from './toggle'


const rootReducer = combineReducers({
  Students,
  Account,
  Classrooms,
  Student,
  ReadingLevel,
  StudentSearch,
  Toggle,
  router: routerReducer

})

export default rootReducer
