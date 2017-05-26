import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navbar extends Component  {

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
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.Account
})

export default connect(mapStateToProps, null)(Navbar)
