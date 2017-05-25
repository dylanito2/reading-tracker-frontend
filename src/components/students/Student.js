import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StudentCommentForm from './StudentCommentForm'
import { fetchStudent } from '../../actions/students'

class Student extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
      fetchStudent: PropTypes.func.isRequired,
      account: PropTypes.object,
      student: PropTypes.object
    }

  componentWillMount = () => {
    const { fetchStudent, match } = this.props
    const classroomId = match.params.classroomId
    const studentId = match.params.studentId
    fetchStudent(classroomId, studentId)
  }

  renderStudentInfo = () => {
    if (this.props.student) {
    const { student } = this.props
      return (
        <div>
          <h1>{ student.first_name } { student.last_name }</h1>
          <StudentCommentForm student={ student }/>
        </div>
      )
    }
  }

  renderComments = () => {
    const { student } = this.props
    if (student && student.comments.length > 0) {
      return student.comments.map((comment) => {
        return <p key={ comment.id }>{ comment.text }</p>
      })
    } else {
      return <p>No Comments Added Yet</p>
    }
  }

  render() {
    return (
      <div>
        { this.renderStudentInfo() }
        { this.renderComments() }
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
