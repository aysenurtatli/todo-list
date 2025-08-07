import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, updateTodo, deleteTodo}) => {
    console.log('todos:', todos);

  return (
    <ul className='my-10 flex flex-col gap-4'>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id} 
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        ))}
        
    </ul>
  )
}

export default TodoList