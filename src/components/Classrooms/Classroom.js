import React from 'react'
import { Link } from 'react-router-dom'

const Classroom = (props) => (
  <Link to={`/${props.schoolId}/${props.classroom.id}`}>
    <button>{props.classroom.name}</button>
  </Link>
)

export default Classroom
