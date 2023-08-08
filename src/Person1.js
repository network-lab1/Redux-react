import React from 'react'

function Person1(props) {
  return (
    <div>
        <h1>Hi from person 1{props.name}</h1>
        <h2>Age is {props.age}</h2>
    </div>
  )
}

export default Person1