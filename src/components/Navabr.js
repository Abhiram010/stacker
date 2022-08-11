import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Logo from '../Assests/logo.png';

const Navabr = ({ onClickUpdate, onClickAll, BrandName }) => {
    let check = [];
    let [allData, setallData] = useState(null);
    function allDataCall() {
        let url = `http://localhost:3001/Data/`;

        axios.get(url).then(
            response => {

                setallData(response.data);
            }
        ).catch(error => { console.log(error) });
    }

    if (allData) {

        allData.map((item) => {
            // if item is not in check array then push it in check array
            if (!check.includes(item.category)) {
               
                check.push(item.category);
                
            }
        })
    }

    useEffect(
        () => {
            allDataCall();
        }, [])
    
    function Clickedit() {
        console.log("edit");
    }
   
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-dark">
              <div className={"container-fluid"}>
                  <span className='flex logoPart'>
                  <img src={Logo} alt="no" className='logo' />
                      <button className='myButton' onClick={onClickAll}>{BrandName}</button>
                      </span>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <Link to='/History'>
                     
                          <button className='myPill' onClick={onClickAll}>History</button> </Link>
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          {check.map((navLink) => {
                              return (
                                  <ListItem linkSource={() => Clickedit} linkName={navLink} key={check.indexOf(navLink)} onclicked={(linkName)=>(onClickUpdate(linkName))} />
                                  
                              );
                          })}
                      </ul>
                      
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navabr