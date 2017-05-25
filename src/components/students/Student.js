import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchStudent } from '../../actions/students'

class Student extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
      account: PropTypes.object.isRequired,
      student: PropTypes.object.isRequired
    }

  componentWillMount = () => {
    const { fetchStudent, match } = this.props
    const classroomId = match.params.classroomId
    const studentId = match.params.studentId
    fetchStudent(classroomId, studentId)
  }

  render() {
    const { student } = this.props
    return (
      <div>
        <h1> { student.first_name } { student.last_name }</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
    student: state.Student
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudent: fetchStudent
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
