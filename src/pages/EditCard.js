import React from 'react'
import { useEffect,useState,useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import CreatableSelect from 'react-select/creatable';
import Navabr from '../components/Navabr';
import Logo from '../Assests/logo.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const EditCard = ({ onSubmitDo }) => {
  

  const MySwal = withReactContent(Swal)

 

  // getting params from url
  const { id } = useParams();
  let [Single, setSingle] = useState([]);
  let[allData,setallData] = useState([]);
  let [VideoSource, setVideoSource] = useState(null);
  let [VideoId, setVideoId] = useState(null);
  // api call to get single card
  const apiCall = (id) => {
    let url = `http://localhost:3001/Data/${id}`;
    
    axios.get(url).then(
      response => {
       
        setSingle(response.data);
        setVideoSource(response.data.videoLink);
        setVideoId(response.data.id);

      }
    ).catch(error => { console.log(error) });
  }
  function allDataCall() {
    let url = `http://localhost:3001/Data/`;

    axios.get(url).then(
      response => {

        setallData(response.data);
      }
    ).catch(error => { console.log(error) });
  }

  useEffect(
    () => {
      allDataCall();
    }, [])
  const options = [
  ]
  let check = [];
  if (allData) {

    allData.map((item) => {
      // if item is not in check array then push it in check array
      if (!check.includes(item.category)) {

        let temp = {
          value: item.category,
          label: item.category
        }
        options.push(temp);
        check.push(item.category);
       
      }
    })
  }

  // rendering single card
  useEffect(() => {
    apiCall(id);
  }, [])

  const videoRef = useRef();
  useEffect(() => {
    callSome();
    videoRef.current?.load();
    setVideoSource(Single.videoLink);
    console.log("dfdsf",Single.videoLink);
    
  }, [Single])
  function callSome() {
    return(
      <Video srcLink={VideoSource} id={VideoId} width={500} height={325} />
    )
}
 
  const customStyles = {
    singleValue: base => ({
      ...base,
      color: "#fff"
    }),
    input: base => ({
      ...base,
      color: "#fff"
    }),
    control: (base, state) => ({
      ...base,
      background: "#212529",
      boxShadow: state.isFocused ? null : null,   
      color:"#fff",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0
      
    }),
    menuList: (base) => ({
      ...base,
      background: "rgb(25,25,25)",
      padding: 0,      
      
      color: "#333333"
    }),
    
   
   
  };

  useEffect(() => {
    setUpdateName(Single.name);
    setUpdateCategory(Single.category);
    setUpdateVideoLink(Single.videoLink);
  },[Single])
  
  let [updateName, setUpdateName] = useState(Single.name);
  let [updateCategory, setUpdateCategory] = useState(Single.category);
  let [updateVideoLink, setUpdateVideoLink] = useState(Single.videoLink);

  let handleInputChange = (inputValue) => {
    setUpdateCategory(inputValue);
  };
  function onSubmitDo(event) {
    event.preventDefault();
    let url = `http://localhost:3001/Data/${id}`;
    let formData = {
      "name":updateName,
      "category":updateCategory,
      "videoLink":updateVideoLink,
    };

    axios.put(url, formData
    ).then((response) => { console.log(response) })
      .catch((error) => {
        console.log(error);
      })
    MySwal.fire({
      title: <p>Card had Updated Succesfully</p>,
    }).then(() => {
      return MySwal.fire(<p>Please go to Home page to see changes</p>)
    })
   
  }

  
 
  return (
    <>
      
      <Navabr BrandName={"Stacker"}/>
      <div className='container formcard flex'>
        <div>      
          {/* using of video component taking lots of time and sometimes it is not working so used direct video tag */}
          {/* <Video srcLink={Single.videoLink} id={Single.} width={500} height={325} /> */}

          <video controls width="500" height="325" preload="none"  id="video" ref={videoRef} >
            not supported
            <source src={Single.videoLink} type="video/mp4" />
          </video>
        <br />
          <small className='text-white text-center'>Note:<br />videos from  Http source will not load
           </small>
        </div>

        <span>

       
        <h2 className='text-success text-center'>Edit the Card</h2>
        <form className='form' onSubmit={onSubmitDo}>
         
          <div className="form-group">
            <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e) => setUpdateName(e.target.value)} defaultValue={updateName}  />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
            <CreatableSelect
              isClearable
              options={options}
              styles={customStyles}
              onChange={(value) => handleInputChange(value.value)}
            />
            <small className='text-white text-center'>Type to create new, use existing by selecting</small>
        </div>
        <div className="form-group">
          <label htmlFor="videoLink">Video Link</label>
              <input type="text" className="form-control" id="videoLink" placeholder="Enter video link" onChange={(e) => setUpdateVideoLink(e.target.value)} defaultValue={updateVideoLink} />
          </div>
         
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
        </span>
       
      </div>
    
    </>
  )
  
  }
 

export default EditCard