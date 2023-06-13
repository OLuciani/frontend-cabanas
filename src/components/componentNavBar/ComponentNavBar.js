import React from 'react';
import "./ComponentNavBar.css"
const ComponentNavBar = (props) => {
  return (
    <>
        <p className='name-button'>{props.name}</p>
    </>
  )
}

export default ComponentNavBar;