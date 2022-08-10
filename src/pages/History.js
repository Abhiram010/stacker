import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const History = () => {
  let [watchData, setwatchData] = useState([]);
  axios.get('http://localhost:3001/History').then(response => { 
    setwatchData(response.data);
  }).catch(error => { console.log(error) })
  let [wholeData, setwholeData] = useState([]);
  console.log(watchData[0]);
  axios.get(`http://localhost:3001/Data/`).then(response => { console.log(response.data); setwholeData(response.data) }).catch(error => { console.log(error) })
  return (
    <div className='history flex'>
      {wholeData}
      
    </div>
  )
}

export default History