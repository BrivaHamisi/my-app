import React from 'react'
import { MyContext } from './MyFragment'

function ComponentB() {
  return (
    <div>
        <MyContext.Consumer>
            {
                data => {
                    return <h2>{data}</h2>
                }
            }
        </MyContext.Consumer>
    </div>
  )
}

export default ComponentB