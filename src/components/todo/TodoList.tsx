import { useState } from "react"
import { Flex, Box, Input, Button } from "@chakra-ui/react"
import TodoItem from "./TodoItem"
import type { Todo } from "./type"

function TodoList() {
  const initialTodos: Todo[] = [{
    name: 'Create Guest Experience mobile check-in',
    checked: false
  }, {
    name: 'Document current CI/CD process',
    checked: false
  }, {
    name: 'Perform Code Review for final Pillow-Talk Release',
    checked: false
  }, {
    name: 'Implement new Color Palette from Design Team',
    checked: false
  }, {
    name: 'Fix image uploading process for guest check-in',
    checked: false
  }, {
    name: 'Provide on-boarding documentation',
    checked: false
  }]

  const [todos, setTodos] = useState(initialTodos)
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
    <Box m={10}>
      <Flex direction="column" gap={4}>
        <h1>Chores ToDo List</h1>

        <Box width="600px">
          {todos.map((todo, index) => (
            <TodoItem 
              key={index} 
              todo={todo} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
            />
          ))}
        </Box>
        
        <Flex justify="center">
          <strong>Done</strong> : {todos.filter(todo => todo.checked).length}
        </Flex>
        
        <form>
          <Flex direction="column" gap={2}>
            <label htmlFor="name">
              <strong>Add Todo</strong>
            </label>

            <Input 
              id="name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              size='md' 
              placeholder="Enter Todo" 
            />

            <Button 
              onClick={addTodo} 
              colorScheme="blue"
            >ADD TASK</Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  )
}

export default TodoList