import React from 'react'
import { FaMinus } from "react-icons/fa";

const TodoItem = ({todo, updateTodo, deleteTodo}) => {
  return (
    <li className={`text-white border border-zinc-400 ${todo.completed ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-700'} transition-all rounded-xl w-full px-4 py-2 flex justify-between items-center`}>
        <label className="flex items-center gap-3 cursor-pointer  flex-1 min-w-0">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo.id)}
                className="peer hidden"
            />
            <div className="w-5 min-w-5 h-5 rounded-full border-2 border-orange-800 peer-checked:bg-green-800 peer-checked:border-green-800 transition-all"></div>
            <span className={`${todo.completed ? 'text-zinc-600' : 'text-white'} min-w-0 max-w-full  transition-all break-words whitespace-normal`}>
                {todo.text}
            </span>
        </label>
        <button 
        className='bg-red-900 text-red-300 text-sm w-[25px] h-[25px] flex items-center justify-center rounded-full cursor-pointer'
        onClick={() => deleteTodo(todo.id)}
        >
            <FaMinus />
        </button>
    </li>
  )
}

export default TodoItem