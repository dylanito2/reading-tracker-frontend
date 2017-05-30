import React, { Component, PropTypes } from 'react'

export default class ConferenceComments extends Component {

  static propTypes = {
    conference: PropTypes.object
  }

  listComments = () => {
    const { conference } = this.props
    if (conference.comments.length > 0) {
      return conference.comments.map((comment) => {
        return <p>{comment.text}</p>
      })
    } else {
      return <p>This conference has no comments</p>
    }
  }

  render() {
    return (
      <div>
        <h3>Conference Notes</h3>
        { this.listComments() }
      </div>
    )
  }
}
