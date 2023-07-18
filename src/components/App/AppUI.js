import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';

import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    console.log("load app " + loading);
    return (
        <>

            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {
                    loading
                        ? <><TodosLoading /> <TodosLoading /> <TodosLoading /></>
                        : null
                }

                {
                    error
                        ? <TodosError />
                        : null
                }

                {
                    (!loading && !searchedTodos.length)
                        ? <TodosEmpty />
                        : null
                }

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList >

            <CreateTodoButton />

        </ >
    );
}

export { AppUI };