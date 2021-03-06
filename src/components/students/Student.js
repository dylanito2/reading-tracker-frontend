import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Dropdown from 'react-dropdown'

import StudentReadingLevelChart from './StudentReadingLevelChart'
import StudentOverview from './StudentOverview'
import NewConference from '../Conferences/NewConference'
import ConferenceComments from '../Conferences/ConferenceComments'
import { fetchStudent } from '../../actions/students'
import { toggleStudentView } from '../../actions/toggle'
import '../../stylesheets/student.css'


class Student extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchStudent: PropTypes.func.isRequired,
    account: PropTypes.object,
    student: PropTypes.object,
    toggleStudentView: PropTypes.func
  }

  state = {
    selectedConference: 0
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

  componentDidMount = () => {
    const { student } = this.props
    if (student) {
      let initialSelected = student.conferences.length - 1
      this.setState({
        selectedConference: initialSelected
      })
    }
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

  renderStudentInfo = () => {
    if (this.props.student) {
      const { student } = this.props
      return (
        <div className="student-info">
          <h1>{student.first_name + ' ' + student.last_name}</h1>
          { this.renderLastConferenceInfo()}
        </div>
      )
    }
  }

    renderLastConferenceInfo = () => {
      const { student } = this.props
      const lastConference = student.conferences[student.conferences.length-1]
      return (
        <div>
          <p><strong>Current Reading Level:</strong> { lastConference.reading_level.score }</p>
          <p>Last Conference Held On { lastConference.date }</p>
        </div>
      )
    }

    renderConferenceDropDown = () => {
      const { student } = this.props
      if (student) {
        return student.conferences.map((conference) => {
          return { value: conference.id, label: conference.date}
        })
      }
    }

    renderDefaultDropdownValue = () => {
      const { student } = this.props
      if (student) {
        const lastConference = student.conferences[student.conferences.length-1]
        return { value: lastConference.id, label: lastConference.date}
      }
    }

    onSelect = (conference) => {
      const { student } = this.props
      let conferenceSelected = student.conferences.filter((con) => con.id == conference.value)[0]
      let conferenceIndex = student.conferences.indexOf(conferenceSelected)
      this.setState({
        selectedConference: conferenceIndex
      })
    }

    determineConferenceToShow = () => {
      const { student } = this.props
      const { selectedConference } = this.state
      if (student) {
        student.conferences[selectedConference]
      }
    }

  render() {
    const { student, toggled, toggleStudentView } = this.props
    return (
      <div className="col-md-12">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-md-offset-1 student-header">
              { this.renderStudentInfo() }
              <button type="button" className="flat-button new-conference" onClick={ toggleStudentView }>{ this.renderButtonText() }</button>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              { toggled ? null : <StudentOverview student={student} renderStudentName={ this.renderStudentName }/> }
            </div>
          </div>
          <div className="row">
          { toggled ? <NewConference student={ student } /> : null }
          <div className="col-md-12 col-md-offset-1 conference-details">
            <h1>Conference Details</h1>
            <Dropdown
              options={this.renderConferenceDropDown()}
              className="conference-dropdown"
              onChange={this.onSelect}
              value={this.renderDefaultDropdownValue()}
              placeholder="Select a conference" />
            {/* <ConferenceComments conference={this.determineConferenceToShow()} /> */}
          </div>
          </div>
        </div>
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
