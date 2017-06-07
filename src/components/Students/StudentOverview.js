import React, { Component, PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import GraphTabs from '../Graphs/GraphTabs'

import { customStudentCard, customStudentCardTitle } from '../../stylesheets/student'
import '../../stylesheets/student.css'

export default class StudentOverview extends Component {

    state = {
      expanded: false
    }

    static propTypes = {
      student: PropTypes.object,
    }


    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded})
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
          return latestConf.reading_level.score
        } else {
          return "N/A"
        }
      }
    }


    render() {
      const { renderStudentName, student } = this.props
      return (
        <div id='student-card'>
          <Card expanded={ this.state.expanded } onExpandChange={ this.handleExpandChange }>
            <CardHeader
              title={`Current Reading Level: ${this.currentReadingLevel()}`}
              showExpandableButton={false}
              style={ customStudentCard }
              titleStyle = { customStudentCardTitle }
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
