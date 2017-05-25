import axios from 'axios'
import api from '../config/api'

export const addComment = ( commentText, studentId) => {
  // const header = {
  //   headers: {'bearer': token}
  // }
  return (dispatch, getState) => {
    let prefix = api
    const teacherId = getState().Account.teacherId
    let comment = { text: commentText, student_id: studentId, teacher_id: teacherId}
    axios
      .post(`${prefix}/v1/students/${studentId}/comments`, comment)
      .then(response => {
        let student = response.data
        dispatch({type: "SET_STUDENT", student})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
