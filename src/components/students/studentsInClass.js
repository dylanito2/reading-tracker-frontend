import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchStudents } from '../../actions/students'

class StudentsInClass extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
    }

  componentWillMount() {
  let schoolId = this.props.match.params.schoolId
  let classroomId = this.props.match.params.classId
  this.props.fetchStudents(schoolId, classroomId)
  }

  render() {
    return (
      <h1> Hi </h1>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudents: fetchStudents
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(StudentsInClass)
