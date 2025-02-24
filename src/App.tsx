import { useState } from 'react'

interface Todo {
  id: number
  title: string;
  done: boolean;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>("")

  // Function to add new todo
  function addTodo() {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), title: input, done: false }])
    setInput("")
  }

  // Function to toggle
  function toggleStatus(id: number) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
        return todo
      }

      return todo
    }))
  }

  // Function to delete todo 
  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <>
      <div className='todo-container'>
        <h1 className='todo-title'>To-Do title</h1>

        <div className='tod-input-container'>
          <input onChange={(e) => setInput(e.target.value)} type='text' value={input} className='todo-input' placeholder='Add new task' />
          <button onClick={addTodo} className='todo-add-button'>Add</button>
        </div>

        <ul className='todo-list'>
          {
            todos.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.done ? "completed" : ""}`}>
                <span onClick={() => toggleStatus(todo.id)} className='todo-text'>{todo.title}</span>
                <button onClick={() => deleteTodo(todo.id)} className='todo-delete-button'>✖</button>
              </li>
            ))
          }
        </ul >

      </div >
    </>
  )
}

export default App
