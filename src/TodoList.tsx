import { useState } from "react"

type Todo = {
  name: string
  checked: boolean
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [name, setName] = useState('')

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setTodos([ ...todos, { name, checked: false } ])
    setName('')
  }

  const toggleTodo = (name: string) => {
    setTodos(todos.map(todo => todo.name === name ? { name, checked: !todo.checked } : todo))
  }

  const deleteTodo = (name: string) => {
    setTodos(todos.filter(todo => todo.name !== name))
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
              <input type='checkbox' checked={todo.checked} onChange={() => toggleTodo(todo.name)} />
              {' '}
              <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
                {todo.name}
              </span>
              {' '}
              <button onClick={() => deleteTodo(todo.name)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <div>Done : {todos.filter(todo => todo.checked).length}</div>

      <form>
        <label htmlFor="name">Add Todo</label>
        <br />
        <input id="name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <button onClick={addTodo}>ADD TASK</button>
      </form>
    </>
  )
}

export default TodoList
