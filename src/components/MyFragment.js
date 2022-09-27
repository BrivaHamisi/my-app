import React from 'react'
import Counter from './Counter'
import CounterHook from './CounterHook'
import DataFetching from './DataFetching'
import UseReducer from './UseReducer'
import { useEffect, useReducer } from 'react'


function MyFragment() {
  return (
    <div className='container'>
        {/* <UseReducer/> */}
        <DataFetching/>
    </div>
  )
}

export default MyFragment