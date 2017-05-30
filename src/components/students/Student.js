import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import GraphTabs from '../Graphs/GraphTabs'
import StudentCommentForm from './StudentCommentForm'
import StudentReadingLevelChart from './StudentReadingLevelChart'
import { fetchStudent } from '../../actions/students'

class Student extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchStudent: PropTypes.func.isRequired,
    account: PropTypes.object,
    student: PropTypes.object
  }

  state = {
    expanded: false
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };


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
      debugger
      fetchStudent(classroomId, studentId)
    }
  }

  renderStudentInfo = () => {
    if (this.props.student) {
      const { student } = this.props
      return student.first_name + ' ' + student.last_name
      {/* <StudentCommentForm student={ student }/>
      <StudentReadingLevelChart student={ student } /> */}
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

  currentReadingLevel = () => {
    const { student } = this.props
    if ( student ) {
      const latestConf = student.conferences[student.conferences.length-1]
      if ( latestConf ) {
        return latestConf.reading_level
      } else {
        return "N/A"
      }
    }
  }

  render() {
    return (
      <div id='student-card'>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.renderStudentInfo()}
            subtitle={`Reading Level: ${this.currentReadingLevel()}`}
            avatar="/images/account.svg"
            showExpandableButton={false}
          />
          {/* <CardText>
          </CardText> */}

          <GraphTabs />
          <CardText expandable={true}>
          </CardText>
          <CardActions>
            {/* <RaisedButton label="Show Some Graph" />
            <RaisedButton label="Show Some Other Graph" /> */}
          </CardActions>
        </Card>
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
