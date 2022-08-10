import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const video = ({ srcLink, id }) => {
 
  function history(id) {

    axios.get(`http://localhost:3001/Data/${id}`).then(response => { 
      axios.post('http://localhost:3001/History',
        {
          "VideoId": response.data.id,
          "time": new Date().toLocaleString()
        }
      ).then(response => { console.log("posted", response) }).catch(error => { console.log(error) })

     }).catch(error => { console.log(error) })
    
    
  }
  return (
    <video width="375" height="250" controls onPlay={()=>history(id) } >
          <source src={srcLink} type="video/mp4" />
      </video>
  )
}

export default video