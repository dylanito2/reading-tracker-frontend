import React, { Component, PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { routerActions } from 'react-router-redux';

import { store } from '../../store'
import { fetchStudentsFromTeacher } from '../../actions/students'

class FuzzyStudentSearch extends Component {

  static propTypes = {
    account: PropTypes.object,
    students: PropTypes.object,
    fetchStudentsFromTeacher: PropTypes.func,
    redirectToStudent: PropTypes.func
  }

  componentWillMount() {
    this.props.fetchStudentsFromTeacher(this.props.account.teacherId)
  }

  identifyStudent = (student) => {
    const { students } = this.props
    let studentObject =  students.objects.filter((studentObj) => studentObj.fullName === student)[0]
    this.redirectToStudent(studentObject)
  }

  redirectToStudent = (student) => {
    let pathName = `/${student.classroom_id}/${student.id}/${student.first_name + " " + student.last_name}`
    routerActions.push(pathName)
  //  <Redirect to={} />
  }

  render() {
  const { students } = this.props
  if (students) {
    return (
      <div>
        <AutoComplete
         floatingLabelText="Search For A Student"
         filter={ AutoComplete.fuzzyFilter }
         dataSource={ students.fullNames }
         onNewRequest={ this.identifyStudent }
         maxSearchResults={5}
       />
     </div>
    )
  } else {
    return <div></div>
  }
  }

}

  const mapStateToProps = (state) => ({
    account: state.Account,
    students: state.StudentSearch,
  })

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchStudentsFromTeacher: fetchStudentsFromTeacher,
    }, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FuzzyStudentSearch)
