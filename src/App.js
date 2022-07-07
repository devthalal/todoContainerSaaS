import React, { lazy } from 'react'
import { Suspense } from 'react'
import env from 'env'
const TodoInputSaaS = lazy(() => import('./components/TodoInputSaaS'))
const TodoItemSaaS = lazy(() => import('./components/TodoItemSaaS'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [refetch, setRefetch] = React.useState(false)

  React.useEffect(() => {
    fetch(`${env.BLOX_FUNCTION_URL}/listTodosSaaS`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data ? data.map(({ id, item }) => ({ id, item: item.name })) : [])
        setRefetch(false)
      })
      .catch((err) => console.log(err))
  }, [refetch])
  return (
    <Suspense fallback={<p>loading..</p>}>
      <h1>Container</h1>
      <TodoInputSaaS refetch={setRefetch} />
      {todos.map((item) => (
        <TodoItemSaaS refetch={setRefetch} item={item.item} id={item.id} key={item.id} />
      ))}
    </Suspense>
  )
}

export default App
