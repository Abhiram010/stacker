import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Video from '../components/Video';
import Navabr from '../components/Navabr';

const History = () => {
  let config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
  let [watchData, setwatchData] = useState([]);
  useEffect(
    () => {
      axios.get('https://stacker-backend010.herokuapp.com/History', config).then(response => {
        setwatchData(response.data);
      }).catch(error => { console.log(error) })
    }, [])
  useEffect(
    () => {
      axios.get('https://stacker-backend010.herokuapp.com/Data/', config).then(response => {
        setwholeData(response.data);
      }).catch(error => { console.log(error) })
    }, [])

  let [wholeData, setwholeData] = useState([]);
  console.log(watchData);
  return (
    <>
      <Navabr BrandName={"Stacker"} />
      <div className='container historyContainer'>
        <h1 className='text-center text-success my-4'>History</h1>
        {watchData.map((card, key) => {
          return (
            <div className='bg-dark' key={key}>
              {
                wholeData.map((item, key) => {

                  if (card.VideoId === item.id) {
                    return (
                      <>

                        <div key={item.id} className="flex history">
                          {console.log(item.videoLink)}

                          <Video srcLink={item.videoLink} id={card.id} width={350} height={200} />
                          <span className='videoTextInfo'>

                            <h3><span className='sideHeading'>NAME:</span> {item.name}</h3>


                            <h3><span className='sideHeading'>CATEGORY:</span> {item.category}</h3>

                            <h6><span className='sideHeading'>DATE & TIME:</span>  {card.time}</h6>
                          </span>

                        </div>
                      </>
                    )
                  }
                  return null;
                })
              }


            </div>
          )
        })}
      </div>
    </>
  )
}

export default History
