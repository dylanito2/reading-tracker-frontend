import axios from 'axios'
import api from '../config/api'

export const fetchClassrooms = (schoolId, classroomId) => {
  return (dispatch) => {
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
