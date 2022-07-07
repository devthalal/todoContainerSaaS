import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoItemSaaS = (props) => {
  console.log(props, 'gh')
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOX_ENV_URL_todoItemSaaS}/remoteEntry.js`,
      scope: 'todoItemSaaS',
      module: './todoItemSaaS',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
