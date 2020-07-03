import React from 'react'
import ComponentWrapper from '../../ComponentWrapper'

const Task = ({ task }) => (
  <ComponentWrapper
    name="<Task/>"
    props={{ task }}
  >
    <li>
      {task}
    </li>
  </ComponentWrapper>
)

export default Task
