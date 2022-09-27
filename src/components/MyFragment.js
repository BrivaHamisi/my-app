import React from 'react'
import Counter from './Counter'
import CounterHook from './CounterHook'


export const MyContext = React.createContext()

function MyFragment() {
  return (
    <div className='container'>

      <Counter/>
      <CounterHook/> 
    
        
    </div>
  )
}

export default MyFragment