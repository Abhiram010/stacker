import React from 'react'
import Buttons from './Buttons'
import Video from './Video'
import {Link} from 'react-router-dom' 

const Card = ({ id, name, videoLink, category, btnClickDelete }) => {
    
        let url = `./Editcard${id}`;
    
    return (
        <div className='card bg-dark col-4' >
            <Video srcLink={videoLink} id={id} />

            <div>
                <span className='textInfo'>
                <h4 className='titleInfo'>{name}</h4>
                    <p className='titleInfo text-white category'>{ category}</p>
                </span>
                <span className='options flex'>
                    
                    <Link to={url} >
                        <Buttons btnStyle={'edit btn btn-primary'} btnName={'Edit'} btnIcon={<i class="fa-solid fa-pen"></i>}/>
                    </Link>
                    <Buttons btnStyle={'delete btn btn-danger'} btnName={'Delete'} btnClick={() => { btnClickDelete(id) }} btnIcon={<i class="fa-solid fa-trash-can"></i>} />

                </span>
            </div>
        </div >


    )
}

export default Card