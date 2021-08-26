import { applyMiddleware, createStore } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import env from '~/utils/env'

import reducer from './reducer'
import client from './client'

const middlewares = []

middlewares.push(thunk)
middlewares.push(axiosMiddleware(client))

if (env === 'development') {
  const logger = createLogger({
    duration: true,
    diff: true,
    timestamp: true,
    collapsed: true
  })
  middlewares.push(logger)
}

export default createStore(reducer, applyMiddleware(...middlewares))
