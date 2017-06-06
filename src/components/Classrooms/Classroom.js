import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { customClassroomCard, customClassroomCardHeader, customClassromCardHeaderText } from '../../stylesheets/classroom'
import '../../stylesheets/buttonsAndInputs.css'
import '../../stylesheets/classroom.css'

injectTapEventPlugin()

const Classroom = (props) => (
  <div className="col-md-6 classroom-card">
    <Card style={customClassroomCard}>
      <div className="centered-div">
        <CardHeader
          title={ props.classroom.name}
          className="card-header"
          subtitle={ `Grade ${props.classroom.grade}` }
          titleStyle = { customClassroomCardHeader }
          textStyle={ customClassromCardHeaderText }
        />
      </div>
      <div className="centered-div">
          <CardActions className="view-class">
            <Link to={ `/${props.schoolId}/students/${props.classroom.id}` }>
            <FlatButton label="View Class" className="view-class-button" />
          </Link>
        </CardActions>
    </div>
  </Card>
  </div>
)

export default Classroom
