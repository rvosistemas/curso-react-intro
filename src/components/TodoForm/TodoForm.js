import React from 'react'

import { TodoContext } from '../TodoContext/TodoContext'

import './TodoForm.css'

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = event => {
    event.preventDefault() // prevents the page from recharging
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = event => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder='Cortar la cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel'
          type='button'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className='TodoForm-button TodoForm-button--add' type='submit'>
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
