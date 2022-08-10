import React from 'react'

const NewCard = ({ openModalForm, onclicked }) => {
  return (
      <button className='AddNew' onClick={openModalForm}>
          <i className="fa-solid fa-plus"></i>
    </button>
  )
}

export default NewCard