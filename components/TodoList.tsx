import Todo from './Todo'

interface TodoItem {
  id: string
  createdAt: Date
  content: string
  completed: boolean
}

interface TodoListProps {
  todos: TodoItem[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="shadow-md rounded-lg">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
