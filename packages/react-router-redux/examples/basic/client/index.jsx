/**
 * Main entry point of the app
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Layout from './Layout'
import Landing from './pages/Landing'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const reducer  = combineReducers({
  //Add other reducers here
  router : routerReducer
})

var store = createStore(reducer, {}, applyMiddleware(historyMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Layout>
        <Switch>
          <Route exact={true} path='/' component={Landing} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)


