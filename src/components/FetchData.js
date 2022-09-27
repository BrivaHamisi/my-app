import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios"

function FetchData() {

    const [article, setArticle ] = useState([])

    const [id, setId ] = useState([1])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( resp => {
            console.log(resp.data) 
            setArticle(resp.data)
        })
        .catch(error =>console.error(error))
    },[id])
  return (
    <div>
        <input type='text' value ={id} onChange ={e => setId(e.target.value)}/>
        <h3>{article.title}</h3>
    </div>
  )
}

export default FetchData