import React from 'react'

const Buttons = ({ btnStyle, btnName, btnClick, btnIcon  }) => {
  return (
    <button className={btnStyle} onClick={btnClick}>{ btnIcon} {btnName}</button>
  )
}

export default Buttons