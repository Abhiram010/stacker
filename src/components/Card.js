import React from 'react'
import Buttons from './Buttons'
import Video from './Video'

const Card = ({ key, id, name,videoLink, btnClickEdit, btnClickDelete }) => {
    return (
        <div className='card bg-dark' key={key}>
            <Video srcLink={videoLink} id={id} />

            <div className='titleTag'>

                <h4 className='titleInfo'>{name}</h4>
                <span>
                    <Buttons btnStyle={'edit btn btn-primary'} btnName={'Edit'} btnClick={() => btnClickEdit(id)} />
                    <Buttons btnStyle={'delete btn btn-danger'} btnName={'Delete'} btnClick={() => { btnClickDelete(id) }} />

                </span>
            </div>
        </div >


    )
}

export default Card