import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchStudents } from '../../actions/students'

class StudentsInClass extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
      account: PropTypes.object.isRequired
    }

  componentWillMount() {
    let classroomId = this.props.match.params.classId
    this.props.fetchStudents(classroomId)
  }

  render() {
    return (
      <h1> Hi </h1>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudents: fetchStudents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsInClass)
