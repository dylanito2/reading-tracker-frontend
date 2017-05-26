import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import ActionGrade from 'material-ui/svg-icons/action/grade'

const StudentTile = ( { student, currentReadingLevel, classroomId, schoolId } ) => (
  <Link to={`/${classroomId}/${student.id}/${student.first_name}-${student.last_name}/`}>
  <ListItem
    primaryText={`${student.first_name} ${student.last_name}`}
    leftIcon={<ActionGrade color={pinkA200} />}
    rightAvatar={<Avatar backgroundColor='white' src="/images/account.svg" />}
  />
</Link>
)

export default StudentTile
