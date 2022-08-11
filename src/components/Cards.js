import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import FormModal from './FormModal';
import NewCard from './NewCard';
import Card from './Card';
import Navabr from './Navabr'
const Cards = () => {

        
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '8px',
            backgroundColor: 'rgb(62, 62, 62)',
        },
    };

    function openModal(id) {
        setIsOpen(true);
        setTempID(id);
        
    }
     

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        return null;
    }

    function closeModal() {
        setIsOpen(false);
    }


   


    let content = null;
    const [Data, setData] = useState([]);
    let [id, setID] = useState(null);
    let [Tempid, setTempID] = useState(null);

    let [name, setName] = useState(null);
    let [category, setCategory] = useState(null);
    let [videoLink, setVideoLink] = useState(null);
    
    const apiCall = () => {
        axios.get('http://localhost:3001/Data').then(response => {
            setData(response.data);
        }).catch(error => { console.log(error) });
    }

    useEffect(() => {
        apiCall();
    }, submitTheForm );


    function deleteCard(id) {

        axios.delete(`http://localhost:3001/Data/${id}`).then(response => {
            apiCall();
        }).catch(error => { console.log(error) });
          
    }

    function submitTheForm(e) {
       
            e.preventDefault();
        
            let url = 'http://localhost:3001/Data';
            let formData = {
                id,
                name,
                category,
                videoLink
            };

            axios.post(url, formData
            ).then((response) => {
                
            })
                .catch((error) => {
                    console.log(error);
                })
                apiCall();
       
        closeModal();
        
    }
    let editCard = (id) => {
    } 
   
    function updateCards(linkName) {
        
        // get axios request and filter the data using linkName

        axios.get('http://localhost:3001/Data')
            .then(response => {
                let v;
                v = (response.data).filter(item => item.category == linkName)
                console.log(v)
                setData(v);
            }).catch(error => { console.log(error) });
        
    }
    function allCards(BrandName) {
        
        axios.get('http://localhost:3001/Data')
            .then(response => {
                setData(response.data);
            }).catch(error => { console.log(error) });
    }
if (Data) {
    content = <>
        <FormModal openModal={openModal} modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} submitTheForm={submitTheForm} setID={setID} setName={setName} setVideoLink={setVideoLink} setCategory={setCategory} length={Data.length} Data={Data} customStyles={customStyles} setTempID={Tempid} />
        <div className='container'>

       
        <div className='row '>

        <div className='cards '>
            <NewCard openModalForm={() => openModal(-1)} onclicked={submitTheForm} />
            {Data.map((card) => {
                return (
                    <Card key={card.id} id={card.id} videoLink={card.videoLink} name={card.name} category={card.category} btnClickEdit={() => editCard(card.id)} btnClickDelete ={() => deleteCard(card.id)} />
                );
            })}
            </div>
            </div>
        </div>

    </>;
}
    
    return (
        <>
            <Navabr onClickUpdate={(linkName) => updateCards(linkName)} BrandName={"Stacker"} onClickAll={allCards} />
            {content}
            
        </>
    )
}

export default Cards