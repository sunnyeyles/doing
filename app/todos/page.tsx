import TodoList from '@/components/TodoList'
import NewTodoForm from '@/components/NewTodoForm'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div className="flex justify-center">
      <div className="flex-row mt-6">
        <NewTodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default TodosPage
