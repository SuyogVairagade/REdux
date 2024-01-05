import React from 'react'
import '../App.css'

const Counter = () => {
  return (
    <div>
      <h1>
        Welcome to redux counter app
      </h1>
      <div>
        <a className="signs" >-</a>
        <input value={0}/>
        <a className="signs" >+</a>
      </div>
    </div>
  )
}

export default Counter
