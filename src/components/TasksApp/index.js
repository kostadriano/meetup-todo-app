import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TasksList from './TasksList';
import ComponentWrapper from '../ComponentWrapper'

const TasksApp = () => {
  const [tasks, setTasks] = useState([])

  return (
    <ComponentWrapper
      name="<TasksApp/>"
      state={{ tasks }}
    >
      <div>
        <NewTaskForm handleSubmit={newTask => setTasks([...tasks, newTask])} />

        <TasksList tasks={tasks} />
      </div>
    </ComponentWrapper>
  )
}

export default TasksApp;
