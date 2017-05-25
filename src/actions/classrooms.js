import axios from 'axios'
import api from '../config/api'

export const fetchClassrooms = () => {
  return (dispatch, getState) => {
    let schoolId = getState().Account.schoolId
    let prefix = api
    axios
    .get(`${prefix}/v1/schools/${schoolId}/classrooms/`)
    .then(response => {
      let payload = response.data
      dispatch({type: 'SET_CLASSROOMS', payload})
    })
    .catch((error) => {
      // Add In Error Catch
    })
  }
}
