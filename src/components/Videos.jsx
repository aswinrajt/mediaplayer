import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Row,Col } from 'react-bootstrap'
import { getVideos } from '../services/allApi'
import { deleteVideos } from '../services/allApi'

function Videos(add) {

const[videos,setVideos]=useState([])
const[delResponse,setDelResponse]=useState([])


useEffect(()=>{
  getData()
},[add,delResponse])

const getData=async()=>{
  const res=await getVideos()
  console.log(res);
  if(res.status==200){
    setVideos(res.data)
  }
  else{
    console.log(res);
    
  }
  
}

  return (
    <>
   <div className='border border-3 shadow p-5 mb-3'>
       {
        videos.length > 0 ?
        <Row>

          {
            videos.map(item =>(
              
              <Col>
              <Videocard video={item} response={setDelResponse}/>
              </Col>

  ))
}  
        </Row>
        :
        <h2 className='text-center text-danger'>NO videos available</h2>
       }
       
       
   </div>
   </>
   )
}

export default Videos