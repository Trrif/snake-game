import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppConnect from './App'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
