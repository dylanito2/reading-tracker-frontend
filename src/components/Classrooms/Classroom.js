import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'

const Classroom = (props) => (
  <Card>
    <CardHeader
      title={ props.classroom.name}
      subtitle={`Grade ${props.classroom.grade}`}
    />
    <CardActions>
      <Link to={`/${props.schoolId}/students/${props.classroom.id}`}>
      <FlatButton label="View Class" />
    </Link>
  </CardActions>
</Card>
)

export default Classroom
