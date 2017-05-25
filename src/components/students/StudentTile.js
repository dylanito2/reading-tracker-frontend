import React from 'react'
import { Link } from 'react-router-dom'

const StudentTile = ( { student, currentReadingLevel, classroomId, schoolId } ) => (
    <div>
      <Link to={`/${classroomId}/${student.id}/${student.first_name}-${student.last_name}/`}><h1>{student.first_name} {student.last_name}</h1></Link>
      <h4>Current Reading Level: { currentReadingLevel }</h4>
    </div>
)

export default StudentTile
