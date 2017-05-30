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
    conferenceCommentsDisplayed: null,
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
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          cols={3}
          style={styles.gridList}
        >
        <Subheader>Conferences</Subheader>
        {student.conferences.map((conference) => (
          <GridTile
            key={conference.id}
            title={conference.date}
            subtitle={<span>Reading Level <b>{conference.reading_level.score}</b></span>}
            actionIcon={<IconButton onClick={ this.renderComments.bind(null, conference) }><StarBorder  color="white" /></IconButton>}
            >
          </GridTile>
        ))}
      </GridList>
      {conferenceCommentsDisplayed !== null ? <ConferenceComments conference={student.conferences[conferenceCommentsDisplayed]} /> : null }
    </div>
    )
  }

}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 450,
    overflowY: 'auto',
  },
}
