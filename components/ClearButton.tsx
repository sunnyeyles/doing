'use client'
import { clearTodos } from '@/utils/actions'
export const ClearButton = () => {
  const handleClearTodos = async () => {
    clearTodos()
  }
  return (
    <button className="btn" onClick={handleClearTodos}>
      Clear Todos
    </button>
  )
}
