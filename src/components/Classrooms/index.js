import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Classroom from './Classroom'
import { fetchClassrooms } from '../../actions/classrooms'

class Classrooms extends Component {

  static propTypes = {
      match: PropTypes.object.isRequired,
      account: PropTypes.object.isRequired,
      classrooms: PropTypes.array.isRequired
    }

  componentWillMount() {
    this.props.fetchClassrooms()
  }

  renderClassrooms = () => {
    let schoolId = this.props.account.schoolId
    return this.props.classrooms.map((classroom) => {
      return <Classroom classroom={classroom} schoolId={schoolId} key={classroom.id} />
    })
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">{this.renderClassrooms()}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
    classrooms: state.Classrooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchClassrooms: fetchClassrooms
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Classrooms)
