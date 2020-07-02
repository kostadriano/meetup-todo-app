import React, { useState } from 'react'

const NewTaskForm = ({ handleSubmit }) => {
  const [task, setTask] = useState({
    description: ''
  });

  const handleChange = ({ target }) => {
    const { value } = target;

    setTask({
      description: value
    });
  }

  const onSubmit = event => {
    event.preventDefault();

    handleSubmit(task);
    setTask({ description: '' });
  }

  return (
    <form onSubmit={onSubmit}>
      <input name='description' value={task.description} onChange={handleChange} />

      <button type='submit'>
        Save Task
      </button>
    </form>
  )
}

export default NewTaskForm
