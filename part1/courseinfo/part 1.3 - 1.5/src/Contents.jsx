import React from 'react'

const Contents = (props) => {
  return (
    <div>
        <p>
            {props.name}
        </p>
        <p> {props.exercise} </p>
    </div>
  )
}

export default Contents