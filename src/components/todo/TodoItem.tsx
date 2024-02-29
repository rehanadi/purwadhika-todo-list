import { Box, Button, Checkbox, Flex } from "@chakra-ui/react"
import type { Todo } from "./type"
import { DeleteIcon } from "@chakra-ui/icons"

type TodoItemFC = React.FC<{
  todo: Todo
  toggleTodo: (name: string) => void
  deleteTodo: (name: string) => void
}>

const TodoItem: TodoItemFC = ({ todo, toggleTodo, deleteTodo }) => {
  console.log(todo)
  return (
    <Box mb={3}>
      <Flex justify="space-between">
        <Checkbox 
          isChecked={todo.checked}
          onChange={() => toggleTodo(todo.name)}
          borderColor="lightblue"
        >
          <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
            {todo.name}
          </span>
        </Checkbox>

        <Button 
          colorScheme='red' 
          onClick={() => deleteTodo(todo.name)}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Box>
  )
}

export default TodoItem