import axios from 'axios'
import api from '../config/api'

export const fetchStudents = () => {
  return (dispatch) => {
    let prefix = api
    axios
      .get(`${prefix}/${school.id}/${class.id}/students`)
      .then(response => {
        let topics = response.data
        dispatch({type: 'SET_TOPICS', topics})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
