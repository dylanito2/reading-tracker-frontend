import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'

import { addConference } from '../../actions/conferences'

class NewConference extends Component {

  state = {
    commentsAdded: [],
    currentComment: '',
    readingLevel: ''
  }

  static propTypes = {
    account: PropTypes.object,
    student: PropTypes.object.isRequired,
    addConference: PropTypes.func
  }

  addComment = (e) => {
    e.preventDefault()
    const { commentsAdded, currentComment } = this.state
    let newComment = currentComment
    this.setState({
      commentsAdded: [...commentsAdded, newComment],
      currentComment: ''
    })
  }

  addConference = () => {
    const { addConference, student } = this.props
    const { commentsAdded, readingLevel } = this.state
    addConference(commentsAdded, readingLevel, student.id)
  }

  readingLevelChange = (e) => {
    this.setState({
      readingLevel: e.target.value
    })
  }

  handleCommentChange = (e) => {
    this.setState({
      currentComment: e.target.value
    })
  }

  listAddedComments = () => {
    const { commentsAdded } = this.state
    return commentsAdded.map((comment, index) => {
      return <p key={ index }>{ comment }</p>
    })
  }

  render() {
    const { currentComment, readingLevel } = this.state
    return (
      <div>
        <h1>Add a New Conference</h1>
        Reading Level: <input type="text" value= { readingLevel } onChange={ this.readingLevelChange }/>
        <form onSubmit={ this.addComment }>
          Add Comment: <input type="text" value={ currentComment } onChange={ this.handleCommentChange }/>
        </form>
        { this.listAddedComments () }
        <input type="submit" value="Save" onClick={ this.addConference} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    account: state.Account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addConference: addConference
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewConference)
