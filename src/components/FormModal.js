import React from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { useEffect,useState } from 'react';



const FormModal = ({ openModal, modalIsOpen, afterOpenModal, closeModal, submitTheForm, setID, setName, setVideoLink, length, customStyles, setCategory, Data, setTempID, edit }) => {
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
    let [FormData, setFormData] = useState([])
    
    useEffect(() => {
        axios.get('https://api.npoint.io/baf4bcf9eb8946410e5e/Data',config).then(response => {
            setFormData(response.data);
        },[]);
    },[]);
    let our = setTempID;
    
 
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
                    <form className='form flex'>
                        <input type="text" onChange={(e) => setID(length + 1)} hidden  />
                        <label className='text-white '>Name of the Card</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        <label className='text-white '>Category</label>
                        <input type="text" onChange={(e) => setCategory(e.target.value)} />
                        <label className='text-white '>Video link</label>
                        <input type="text" onChange={(e) => setVideoLink(e.target.value)} />
                        <button type="submit" value="Submit" onClick={submitTheForm}> Submit</button>

                    </form>

                </Modal>
            </div>
        );
    
}

export default FormModal
