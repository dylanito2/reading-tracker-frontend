import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import createHistory from 'history/createBrowserHistory'

import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export const history = createHistory()
export default connect(null, null)(App)
