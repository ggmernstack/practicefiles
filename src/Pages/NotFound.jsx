import React from 'react'
import { useParams } from 'react-router-dom'

const NotFound = () => {

    const data = useParams()
    console.log(data)

  return (
    <div>Something wend wrong  <span>from not found page</span> {data.id} </div>
  )
}

export default NotFound