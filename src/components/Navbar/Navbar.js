import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, FormGroup, FormControl } from 'react-bootstrap'

import FuzzyStudentSearch from './FuzzyStudentSearch'
import '../../stylesheets/navbar.css'

class Header extends Component  {

  static propTypes = {
    account: PropTypes.object
  }

  render() {
    const { account } = this.props
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <div className="navbar-header col-md-12">
            <div className="col-md-3 navbar-item">
              <NavLink className="navbar-link" to={`/${account.schoolId}/classrooms`}><span className="navbar-link-text">My Classes</span></NavLink>
            </div>
            <div className="col-md-3 navbar-item">
              <img alt="Good Apple" src={"./images/goodApple.png"} className="logo" />
            </div>
          <div className="col-md-3 navbar-item">
            <FuzzyStudentSearch />
          </div>
          </div>
        </div>
      </nav>
    )

  }
}

const mapStateToProps = (state) => ({
  account: state.Account
})

export default connect(mapStateToProps, null)(Header)
