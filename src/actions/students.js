import axios from 'axios'
import api from '../config/api'

export const fetchStudents = (classroomId) => {
  return (dispatch, getState) => {
    const schoolId = getState().Account.schoolId
    let prefix = api
    axios
      .get(`${prefix}/v1/schools/${schoolId}/classrooms/${classroomId}/students`)
      .then(response => {
        debugger
        let students = response.data
        dispatch({type: 'SET_STUDENTS', students})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
