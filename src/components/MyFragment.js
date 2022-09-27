import React from 'react'
import Counter from './Counter'
import CounterHook from './CounterHook'
import FetchData from './FetchData'


export const MyContext = React.createContext()

function MyFragment() {
  return (
    <div className='container'>

      {/* <Counter/>
      <CounterHook/>  */}
      <FetchData/>
    
        
    </div>
  )
}

export default MyFragment