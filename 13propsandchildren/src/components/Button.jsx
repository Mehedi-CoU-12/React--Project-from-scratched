import React from 'react'

function Button(props) {
  return (
    <div>
        <p> count from children: {props.count}  </p>
        <button onClick={props.myFun} > {props.text}</button>
    </div>
  )
}

export default Button