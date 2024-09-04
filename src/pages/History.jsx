import React from 'react'
import { useState,useEffect } from 'react'
import { deleteHistory, getHistory } from '../services/allApi'

function History() {

  const[history,setHistory]=useState([])

  useEffect(()=>{
     getData()
 
  },[])
 
  const getData=async()=>{
     const result=await getHistory()
     console.log(result)
     if(result.status==200){
      console.log(result.data);
      
         setHistory(result.data)
     }
     else
     {
      console.log(result);
      
     }
  }
  
  const dltHistory=async(id)=>{
    const res=await deleteHistory(id)
    console.log(res);
    if(res.status==200){
      getData()
    }
    
  }
  




  return (
    <div className='p-5'>
      
      <h1>Watch History</h1>
      




      {
        history.length>0?

        <table className="table">
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th> </th>
            
            
          </tr>
        </thead>

       <tbody>

       {
        history.map(item =>(

          <tr>
          <td>{item.videoId}</td>
          <td>{item.title}</td>
          <td>{item.url}</td>
          <td>{item.datetime}</td>
          <td>
         <button className='btn' onClick={()=>{dltHistory(item.id)}}>
           <i className="fa-solid fa-trash" style={{color: "#e5153f",}} /></button>

          </td>

        </tr>
        ))
       }
      
       </tbody>
      </table>

      :

      <h3>NO history available</h3>


      }


      
    </div>
  )
}

export default History