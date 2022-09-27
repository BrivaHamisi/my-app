import React, {useState} from 'react'

export default function CounterHook() {

    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)} className='btn btn-info'>Click</button>
    </div>
  )
}
