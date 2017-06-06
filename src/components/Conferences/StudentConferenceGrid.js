import React, { Component, PropTypes } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import ConferenceComments from './ConferenceComments'

export default class StudentConferenceGrid extends Component {

  static propTypes = {
    student: PropTypes.object
  }

  state = {
    conferenceCommentsDisplayed: 0,
  }

  renderConferences = () => {
    const { student } = this.props
    if (student.conferences.length) {
      return student.conferences.map((conference) => {
        return <p><span onClick={this.renderComments.bind(null, conference)}>{conference.date}</span></p>
      })
    }
  }

  renderComments = (conference) => {
    const { student } = this.props
    let conferenceDisplayed = student.conferences.filter((con) => con.id === conference.id)[0]
    let index = student.conferences.indexOf(conferenceDisplayed)
    this.setState({
      conferenceCommentsDisplayed: index
    })
  }

  render() {
    const { student } = this.props
    const { conferenceCommentsDisplayed } = this.state
    return (
    <div>
      { this.renderConferences() }
      <ConferenceComments conference={student.conferences[conferenceCommentsDisplayed]} />
    </div>
    )
  }

}
