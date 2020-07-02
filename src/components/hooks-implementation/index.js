import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TasksList from './TasksList';

const TasksApp = () => {
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <NewTaskForm handleSubmit={newTask => setTasks([...tasks, newTask])} />

      <TasksList tasks={tasks} />
    </div>
  )
}

export default TasksApp;
