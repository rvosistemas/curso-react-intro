import React from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../TodoContext/TodoContext'

import { TodosLoading } from '../TodosLoading/TodosLoading'
import { TodosError } from '../TodosError/TodosError'
import { TodosEmpty } from '../TodosEmpty/TodosEmpty'

import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { Modal } from '../Modal/Modal'
function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } =
        React.useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <TodosError error={error} />}

                {loading && (
                    <>
                        <TodosLoading /> <TodosLoading /> <TodosLoading />
                    </>
                )}
                {!loading && !searchedTodos.length && <TodosEmpty />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && <Modal></Modal>}
        </>
    )
}

export { AppUI }
