import { newTodo } from '@/utils/actions'
import { ClearButton } from './ClearButton'
const NewTodoForm = async () => {
  return (
    <div className="flex gap-6 m-6">
      <form action={newTodo} className="flex gap-6">
        <input
          type="text"
          placeholder="What's next?"
          className="input w-full max-w-xs shadow-md"
          name="content"
        />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
      <ClearButton />
    </div>
  )
}

export default NewTodoForm
