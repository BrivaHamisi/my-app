import React from 'react'
import ComponentA from './ComponentA'
import Counter from './Counter'
import CounterHook from './CounterHook'
import FetchData from './FetchData'

export const Context = React.createContext()


export const MyContext = React.createContext()

function MyFragment() {
  return (
    <div className='container'>
      <Context.Provider value="This data is Sent with useContext Hook">
      <ComponentA/>
      </Context.Provider>
      
    
        
    </div>
  )
}

export default MyFragment