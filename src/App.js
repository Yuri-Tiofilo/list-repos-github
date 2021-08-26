import React from 'react'
import { Provider } from 'react-redux'

import Layout from '~/layout'

import store from './boot/store'

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
