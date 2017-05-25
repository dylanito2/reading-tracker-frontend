import axios from 'axios'
import api from '../config/api'

export const fetchStudents = (classroomId) => {
  return (dispatch, getState) => {
    const schoolId = getState().Account.schoolId
    let prefix = api
    axios
      .get(`${prefix}/v1/schools/${schoolId}/classrooms/${classroomId}/students`)
      .then(response => {
        let students = response.data
        dispatch({type: 'SET_STUDENTS', students})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}

export const fetchStudent = (classroomId, studentId) => {
  return (dispatch, getState) => {
    const schoolId = getState().Account.schoolId
    let prefix = api
    axios
      .get(`${prefix}/v1/schools/${schoolId}/classrooms/${classroomId}/students/${studentId}`)
      .then(response => {
        let student = response.data
        dispatch({type: 'SET_STUDENT', student})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
