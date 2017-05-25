import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Account from './account'


const rootReducer = combineReducers({
  router: routerReducer,
  account
})

export default rootReducer
