import React from 'react'
import ComponentA from './ComponentA'

export const MyContext = React.createContext()

function MyFragment() {
  return (
    <div className='container'>

      <MyContext.Provider value="This is the value from Context">
      <ComponentA/>
      </MyContext.Provider>
    
        
    </div>
  )
}

export default MyFragment