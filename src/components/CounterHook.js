import React, {useState} from 'react'

export default function CounterHook() {

    const [count, setCount] = useState(0)
    const [text, SetText] = useState('This is a text State')
    const [info, setInfo] = useState({name:'',email:'' })
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1  )} className='btn btn-info'>Click</button>
        <h2>{text}</h2>
        <button onClick={() => SetText('This is My Name' )} className='btn btn-success'>Change Text</button>
        <br/>
        <br/>
        <input type='text' className='form-control' value={info.name}
        onChange={e => setInfo({...info, name:e.target.value})}/>
        <input type='text' className='form-control' value={info.email}
        onChange={e => setInfo({...info, email:e.target.value})}/>

        <h2>Name Is : {info.name} </h2>
        <h2>Email Is : {info.email} </h2>
    </div>
  )
}
