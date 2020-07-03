import React, { useState } from 'react'
import ComponentWrapper from '../../ComponentWrapper'

const NewTaskForm = ({ handleSubmit }) => {
  const [task, setTask] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;

    setTask(value);
  }

  const onSubmit = event => {
    event.preventDefault();

    handleSubmit(task);
    setTask("");
  }

  return (
    <ComponentWrapper
      name="<NewTaskForm/>"
      state={{ task }}
      props={{ handleSubmit }}
    >
      <form onSubmit={onSubmit}>
        <input name='description' value={task} onChange={handleChange} />

        <button type='submit'>
          Save Task
        </button>
      </form>
    </ComponentWrapper>
  )
}

export default NewTaskForm
