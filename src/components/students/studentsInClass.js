import React, { Component, PropTypes } from 'react'

import { fetchStudents } from '../../actions/students'

class StudentsInClass extends Component {

  componentWillMount() {
  let schoolId = this.props.match.params.schoolId
  let classId = this.props.match.params.classId
  this.props.fetchStudents(topicId, topicSlug)
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
