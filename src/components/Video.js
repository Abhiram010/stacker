import React from 'react'
import axios from 'axios'

const Video = ({ srcLink, id,width,height }) => {
 
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