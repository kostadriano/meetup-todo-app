import React from 'react';
import Task from '../Task';
import ComponentWrapper from '../../ComponentWrapper'

const TasksList = ({ tasks }) => (
  <ComponentWrapper
    name="<TasksList/>"
    props={{ tasks }}
  >
    <ul>
      {
        tasks.map((task, index) =>
          <Task key={index} task={task} />
        )
      }
    </ul>
  </ComponentWrapper>
)

export default TasksList
