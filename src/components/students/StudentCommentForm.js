import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addComment } from '../../actions/comments'

class StudentCommentForm extends Component {

  state = {
    commentText: null
  }

  static propTypes = {
      student: PropTypes.object.isRequired,
      account: PropTypes.object.isRequired,
      addComment: PropTypes.func.isRequired
    }

  handleChange = (e) => {
    let newText = e.target.value
    this.setState({
      commentText: newText
    })
  }

  postComment = (e) => {
    const { addComment, student } = this.props
    const { commentText } = this.state
    e.preventDefault()
    addComment(commentText, student.id)
    this.setState({
      commentText: ''
    })
  }

  render () {
    const { commentText } = this.state
    return (
      <div>
        <form onSubmit={ this.postComment }>
          <input type="text" value={ commentText } onChange={ this.handleChange } />
          <input type="submit" value="Submit" />
        </form>
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
    addComment: addComment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCommentForm)
