import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { history } from './index.js'

const rMiddleware = routerMiddleware(history)

export function configureStore(){
  return createStore(rootReducer, compose(applyMiddleware(thunk, rMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f))
}

export const store = configureStore()
