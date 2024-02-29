import { Box, Button, Checkbox, Flex } from "@chakra-ui/react"
import type { Todo } from "./type"

type TodoItemFC = React.FC<{
  todo: Todo
  toggleTodo: (name: string) => void
  deleteTodo: (name: string) => void
}>

const TodoItem: TodoItemFC = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <Box mb={2}>
      <Flex justify="space-between">
        <Checkbox 
          checked={todo.checked} 
          onChange={() => toggleTodo(todo.name)}
        >
          <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
            {todo.name}
          </span>
        </Checkbox>

        <Button 
          colorScheme='red' 
          onClick={() => deleteTodo(todo.name)}
        >Delete</Button>
      </Flex>
    </Box>
  )
}

export default TodoItem