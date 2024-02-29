import { useEffect, useState } from "react"
import { Heading, Flex, Box, Input, Button } from "@chakra-ui/react"
import TodoItem from "./TodoItem"
import type { Todo } from "./todo-type"

function TodoList() {
  const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || JSON.stringify(
    [{
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
  ))

  const [todos, setTodos] = useState(initialTodos)
  const [name, setName] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!name) return
    setTodos([ ...todos, { name, checked: false } ])
    setName('')
  }

  const toggleTodo = (name: string) => {
    setTodos(todos.map(todo => todo.name === name ? { name, checked: !todo.checked } : todo))
  }

  const deleteTodo = (name: string) => {
    if (!confirm(`Are you sure want to delete\n"${name}" ?`)) return
    setTodos(todos.filter(todo => todo.name !== name))
  }

  return (
    <Box my={5} mx={10}>
      <Flex direction="column" gap={3}>
        <Heading as="h1" size="xl" mb={2}>Chores ToDo List</Heading>

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
          <Heading as="h4" size="md">
            Done : {todos.filter(todo => todo.checked).length}
          </Heading>
        </Flex>
        
        <form>
          <Flex direction="column" gap={4}>
            <label htmlFor="name">
              <Heading as="h4" size="md">Add Todo</Heading>
            </label>

            <Input 
              id="name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              size='md' 
              placeholder="Enter Todo" 
              borderColor="lightskyblue"
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