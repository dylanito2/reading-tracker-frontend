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

export const fetchStudentReadingLevels = (studentId) => {
  return (dispatch) => {
    let prefix = api
    axios
      .get(`${prefix}/v1/students/${studentId}/reading_levels`)
      .then(response => {
        let readingLevels = response.data
        dispatch({type: 'SET_READING_LEVEL', readingLevels})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}

export const fetchStudentsFromTeacher = (teacherId) => {
  return (dispatch) => {
    let prefix = api
    axios
      .get(`${prefix}/v1/teachers/${teacherId}/students`)
      .then(response => {
        let studentObjs = response.data
        studentObjs.forEach((student) =>  student.first_name + " " + student.last_name)
        const studentNames = studentObjs.map((student) => student.fullName = student.first_name + " " + student.last_name)
        let payload = {fullNames: studentNames, objects: studentObjs}
        dispatch({type: 'SET_STUDENT_MATCHES', payload})
      })
      .catch((error) => {
        // Add In Error Catch
      })
  }
}
