import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StudentReadingLevelChart from './StudentReadingLevelChart'
import StudentOverview from './StudentOverview'
import NewConference from '../Conferences/NewConference'
import { fetchStudent } from '../../actions/students'
import { toggleStudentView } from '../../actions/toggle'


class Student extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchStudent: PropTypes.func.isRequired,
    account: PropTypes.object,
    student: PropTypes.object,
    toggleStudentView: PropTypes.func
  }


  renderButtonText = () => {
    const { toggled } = this.props
    return toggled ?  "Return To Overview" :  "New Conference"
  }

  componentWillMount = () => {
    const { fetchStudent, match } = this.props
    const classroomId = match.params.classroomId
    const studentId = match.params.studentId
    fetchStudent(classroomId, studentId)
  }

  componentWillReceiveProps = (newProps) => {
    const { fetchStudent, match } = newProps
    const { location } = this.props
    if (location.pathname !== match.url) {
      let destructuredPath = match.url.split("/")
      const classroomId = destructuredPath[1]
      const studentId = destructuredPath[2]
      fetchStudent(classroomId, studentId)
    }
  }

  renderStudentName = () => {
    if (this.props.student) {
      const { student } = this.props
      return student.first_name + ' ' + student.last_name
      {/* <StudentCommentForm student={ student }/>
      <StudentReadingLevelChart student={ student } /> */}
    }
  }

  render() {
    const { student, toggled, toggleStudentView } = this.props
    return (
      <div>
        <h1>{ this.renderStudentName () }</h1>
        <button type="button" onClick={ toggleStudentView }>{ this.renderButtonText() }</button>
        { toggled ? <NewConference student={student} /> : <StudentOverview student={student} renderStudentName={ this.renderStudentName }/> }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
    student: state.Student,
    toggled: state.Toggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudent: fetchStudent,
    toggleStudentView: toggleStudentView
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
