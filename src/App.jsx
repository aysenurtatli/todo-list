import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'


function App() {
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
});




   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

 const updateTodo = (id) => {
  const updated = todos.map((todo) => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updated);
};

const deleteTodo = (id) => {
  const updated = todos.filter((todo) => todo.id !== id);
  setTodos(updated);
}



  return (
    <>
     <Header/>
      <div className='max-w-3xl px-5 lg:px-0 mx-auto my-10'>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
    </>
   
  )
}

export default App
