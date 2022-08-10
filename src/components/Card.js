import React from 'react'
import Buttons from './Buttons'
import Video from './Video'

const Card = ({  id, name, videoLink, category, btnClickEdit, btnClickDelete }) => {
    return (
        <div className='card bg-dark' >
            <Video srcLink={videoLink} id={id} />

            <div className='titleTag flex'>
                <span className='textInfo'>
                <h4 className='titleInfo'>{name}</h4>
                    <p className='titleInfo text-white category'>{ category}</p>
                </span>
                <span>
                    <Buttons btnStyle={'edit btn btn-primary'} btnName={'Edit'} btnClick={() => btnClickEdit(id)} />
                    <Buttons btnStyle={'delete btn btn-danger'} btnName={'Delete'} btnClick={() => { btnClickDelete(id) }} />

                </span>
            </div>
        </div >


    )
}

export default Card