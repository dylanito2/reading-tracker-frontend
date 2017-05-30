import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StudentReadingLevelChart from './StudentReadingLevelChart'
import StudentOverview from './StudentOverview'
import NewConference from '../Conferences/NewConference'
import { fetchStudent } from '../../actions/students'

class Student extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchStudent: PropTypes.func.isRequired,
    account: PropTypes.object,
    student: PropTypes.object
  }

  state = {
    toggled: false
  }

  handleToggle = () => {
    const { toggled } = this.state
    let newToggle = toggled ? false : true
    this.setState({
      toggled: newToggle
    })
  }

  renderButtonText = () => {
    const { toggled } = this.state
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
    const { toggled } = this.state
    const { student } = this.props
    return (
      <div>
        <h1>{ this.renderStudentName () }</h1>
        <button type="button" onClick={ this.handleToggle }>{ this.renderButtonText() }</button>
        { toggled ? <NewConference student={student} /> : <StudentOverview student={student} renderStudentName={ this.renderStudentName }/> }
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
