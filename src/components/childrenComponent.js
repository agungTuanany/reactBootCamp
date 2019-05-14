import React from 'react'


const Children = (props) => {
  return (
    <div>
      <h1>children title:{props.title}</h1>
      <h1>children author:{props.author}</h1>
      <h2 onClick={props.onClick}>CLICK-ME</h2>
    </div>

  )
}

export default Children
