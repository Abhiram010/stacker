import React from 'react'
import axios from 'axios'

const Video = ({ srcLink, id, width, height }) => {
  let config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
 
  function history(id) {

    axios.get(`https://api.npoint.io/baf4bcf9eb8946410e5e/Data/${id}`,config).then(response => { 
      axios.post('https://api.npoint.io/baf4bcf9eb8946410e5e/History',
        {
          "VideoId": response.data.id,
          "time": new Date().toLocaleString()
        },config
      ).then(response => { console.log("posted", response) }).catch(error => { console.log(error) })

     }).catch(error => { console.log(error) })
    
    
  }
  return (
    <video width={width} height={height} controls onPlay={()=>history(id) } >
      <source src={srcLink} type="video/mp4" />
      
      <source src={srcLink  } type="video/ogg" />

      </video>
  )
}

Video.defaultProps = {
  width: 375,
  height: 250,
}

export default Video
