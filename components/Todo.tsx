'use client'
import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'

interface TodoItem {
  id: string
  completed: boolean
  content: string
}

interface TodoProps {
  todo: TodoItem
}

const Todo = ({ todo }: TodoProps) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <div
        className={`px-8 py-2  cursor-pointer ${
          todo.completed ? 'line-through text-black/30' : ''
        }`}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.content}
      </div>
    </div>
  )
}

export default Todo
