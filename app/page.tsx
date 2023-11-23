import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-sm">
        <h1 className="text-5xl mb-4">Welcome</h1>
        <p>
          to my Todo list powered by Next.js and enhanced with the beautiful
          design elements of Daisy UI. This simple application helps you
          organize your tasks efficiently. Experience a seamless and responsive
          interface, allowing you to add, complete, and clear your todos
          effortlessly.
        </p>
        <button className="btn mt-4">
          <Link href="/todos">I got stuff to do</Link>
        </button>
      </div>
    </main>
  )
}
