import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chart from 'react-d3-core'
import LineChart from 'react-d3-basic'

import { fetchStudentReadingLevels } from '../../actions/students'

class StudentReadingLevelChart extends Component {

  static propTypes = {
    account: PropTypes.object.isRequired,
    fetchStudentReadingLevels: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
  }

  componentWillMount = () => {
    const { fetchStudentReadingLevels, student } = this.props
    fetchStudentReadingLevels(student.id)
  }

  render() {
    return (
      <h1> Hi </h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudentReadingLevels: fetchStudentReadingLevels
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentReadingLevelChart)
