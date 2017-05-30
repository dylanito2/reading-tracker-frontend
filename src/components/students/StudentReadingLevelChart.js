import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'

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

  // renderChart = () => {
  //   const { readingLevels } = this.props
  //   if (readingLevels.length > 0 ) {
  //   return <XYPlot
  //     width={300}
  //     height={300}>
  //     <HorizontalGridLines />
  //     <LineSeries
  //       data={ readingLevels }/>
  //     <XAxis />
  //     <YAxis />
  //   </XYPlot>
  //   }
  // }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.Account,
    readingLevels: state.ReadingLevel
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStudentReadingLevels: fetchStudentReadingLevels
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentReadingLevelChart)
