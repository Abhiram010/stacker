import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const History = () => {
  let [watchData, setwatchData] = useState([]);
  useEffect(
    () => {
      axios.get('http://localhost:3001/History').then(response => {
        setwatchData(response.data);
      }).catch(error => { console.log(error) })
    },[]
  )
 
  let [wholeData, setwholeData] = useState([]);

  axios.get(`http://localhost:3001/Data/`).then(response => {  setwholeData(response.data) }).catch(error => { console.log(error) })
  return (
    <div className='history flex'>
      {watchData.map((card, key) => {
        return (
          <h1>Hello {card.VideoId}</h1>
        );
      })}
    </div>
  )
}

export default History