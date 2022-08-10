import React from 'react'

const Buttons = ({ btnStyle, btnName, btnClick  }) => {
  return (
    <button className={btnStyle} onClick={btnClick}> {btnName}</button>
  )
}

export default Buttons