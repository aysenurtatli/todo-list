import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
const TodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() === "") return;
        addTodo(todoText);
        setTodoText("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex gap-2'>
            <input 
                type="text"
                value={todoText}
                placeholder='Add task'
                onChange={(e) => setTodoText(e.target.value)}
                className=' bg-zinc-700 rounded-3xl px-3 w-full text-white focus:outline-none' 
            />
            <button 
                className='bg-orange-800 rounded-full w-[50px] min-w-[50px] h-[50px] flex items-center justify-center cursor-pointer text-orange-400'
                type='submit'
            >
                <FaPlus />
            </button>
        </div>
       
    </form>
  )
}

export default TodoForm