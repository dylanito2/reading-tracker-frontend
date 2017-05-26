import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

const Classroom = (props) => (
  <Card style={{width: '400px'}}>
    <CardHeader
      title={ props.classroom.name}
      subtitle={`Grade ${props.classroom.grade}`}
    />
    <CardActions>
      <Link to={`/${props.schoolId}/students/${props.classroom.id}`}>
      <FlatButton label="View Class" backgroundColor='lightgrey' />
    </Link>
  </CardActions>
</Card>
)

export default Classroom
