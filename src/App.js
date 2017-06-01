import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from './components/Navbar/Navbar'
import Classrooms from './components/Classrooms'
import StudentsInClass from './components/Students/StudentsInClass'
import Student from './components/Students/Student'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={ history }>
          <div>
            <Route path="/" component={ Header } />
            <Switch>
              <Route path="/:schoolId/classrooms" component={ Classrooms } />
              <Route path="/:schoolId/students/:classroomId" component={ StudentsInClass } />
              <Route path="/:classroomId/:studentId/:studentName" component={ Student } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export const history = createHistory()
export default connect(null, null)(App)
