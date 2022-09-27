import React, { useContext } from 'react'
import { Context  } from './MyFragment'

function ComponentB() {

    const data = useContext(Context)
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default ComponentB