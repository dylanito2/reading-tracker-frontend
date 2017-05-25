import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import createHistory from 'history/createBrowserHistory'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Reading Tracker</h2>
      </div>
    );
  }
}

const ConnectedApp = connect(null, null)(App)

export default ConnectedApp
