import axios from 'axios'
import api from '../config/api'

export const addConference = (comments, readingLevel, studentId) => {
  // const header = {
  //   headers: {'bearer': token}
  // }
  return (dispatch, getState) => {
    let prefix = api
    const teacherId = getState().Account.teacherId
    let conference = { comments: comments, reading_level: readingLevel, student_id: studentId, teacher_id: teacherId}
    axios
      .post(`${prefix}/v1/students/${studentId}/conferences`, conference)
      .then(response => {
        let student = response.data
        dispatch({type: "SET_STUDENT", student})
        dispatch({type: "TOGGLE_STUDENT_VIEW"})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
