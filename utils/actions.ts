'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

type FormData = {
  get: any
}

export const newTodo = async (formData: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })
  revalidatePath('/todos')
}
export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })
  revalidatePath('/todos')
}

export const clearTodos = async () => {
  await db.todo.deleteMany({
    where: {},
  })
  revalidatePath('/todos')
}
