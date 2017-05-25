import React from 'react'
import { Link } from 'react-router-dom'

const Classroom = (props) => (
  <div>
    <Link to={`/${props.schoolId}/${props.classroom.id}`}>
    <button>{props.classroom.name}</button>
    </Link>
</div>
)

export default Classroom
