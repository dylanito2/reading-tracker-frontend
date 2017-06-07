import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {List, ListItem} from 'material-ui/List'

import StudentTile from './StudentTile'
import { fetchStudents } from '../../actions/students'

class StudentsInClass extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
      account: PropTypes.object.isRequired,
      students: PropTypes.array.isRequired,
      fetchStudents: PropTypes.func.isRequired
    }

  componentWillMount = () => {
    const { fetchStudents, match } = this.props
    const classroomId = match.params.classroomId
    fetchStudents(classroomId)
  }

  currentReadingLevel = (student) => {
    const latestConf = student.conferences[student.conferences.length-1]
    if ( latestConf ) {
      return latestConf.reading_level
    } else {
      return "N/A"
    }
  }

  listStudents = () => {
    const { students, match, account } = this.props
    return students.map((student) => {
      return <StudentTile student={ student } currentReadingLevel={ this.currentReadingLevel(student) } schoolId={ account.schoolId } classroomId={ match.params.classroomId } key={ student.id } />
    })
  }

  render() {
    return (
    <div>
      <List>
        {this.listStudents()}
      </List>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
    students: state.Students
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudents: fetchStudents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsInClass)
