import React from 'react';
import Task from '../Task'

const TasksList = ({ tasks }) => {
  return (
    <ul>
      {
        tasks.map(task =>
          <Task key={task} task={task} />
        )
      }
    </ul>
  )
}

export default TasksList
