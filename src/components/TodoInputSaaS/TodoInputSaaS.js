import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoInputSaaS = (props) => {
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOX_ENV_URL_todoInputSaaS}/remoteEntry.js`,
      scope: 'todoInputSaaS',
      module: './todoInputSaaS',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
