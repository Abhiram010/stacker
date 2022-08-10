import React from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { useEffect, useState } from 'react';


const EditModal = ({ openModal, modalIsOpen, afterOpenModal, closeModal, submitTheForm, setID, setName, setVideoLink, length, customStyles, setCategory, Data, setTempID, edit }) => {

    let [FormData, setFormData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/Data').then(response => {
            setFormData(response.data);
        }, []);
    },[])
    let our = setTempID;
    console.log("Hello", our);
    console.log("FormData", FormData)
    Modal.setAppElement('#root');
    function EditTheForm(id) {
        console.log(id)
    }


    Modal.setAppElement('#root');
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Form for New card"
            >
                <button onClick={closeModal} className="closeButton"><i class="fa-solid fa-xmark text-white"></i></button>
                {/* <form className='form flex'>
                        <input type="text" onChange={(e) => setID(length + 1)} hidden />
                        <label className='text-white '>Name of the Card</label>
                        <input type="text" defaultValue={Data[setTempID].name} onChange={(e) => setName(e.target.value)} />
                        <label className='text-white '>Category</label>
                        <input type="text" defaultValue={Data[setTempID].category} onChange={(e) => setCategory(e.target.value)} />
                        <label className='text-white '>Video link</label>
                        <input type="text" defaultValue={Data[setTempID].videoLink} onChange={(e) => setVideoLink(e.target.value)} />
                        <button type="submit" defaultValue="Submit" onSubmit={() => { submitTheForm("1"); console.log("Hello fomr mowa") }}> Submit</button>
                    
                    </form> */}

            </Modal>
        </div>
    );
}

export default EditModal