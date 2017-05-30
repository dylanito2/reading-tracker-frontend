import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import FuzzyStudentSearch from './FuzzyStudentSearch'

class Navbar extends Component  {

  static propTypes = {
    account: PropTypes.object
  }

  render() {
    const { account } = this.props
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="ReaderTracker" className="logo" src="" />
            </a>
          </div>
          <NavLink to={`/${account.schoolId}/classrooms`}>All Classes</NavLink>
          <FuzzyStudentSearch />
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.Account
})

export default connect(mapStateToProps, null)(Navbar)
