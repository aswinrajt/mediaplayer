import React, { useState, useEffect } from 'react'
import { getCategory } from '../services/allApi'
import { deleteCategory, updateCategory } from '../services/allApi'
import { toast } from 'react-toastify'
import Videocard from './Videocard'


function Categorylist({ response }) {

  const [CategoryList, setCategoryList] = useState([])

  useEffect(() => {
    getData()

  }, [response])

  const getData = async () => {
    const result = await getCategory()
    console.log(result)
    if (result.status == 200) {
      setCategoryList(result.data)
    }

  }







  const deleteCat = async (id) => {
    const result = await deleteCategory(id)
    console.log(result);
    if (result.status == 200) {
      getData()


    }
    else {
      toast.error("Deletion not completed!!")
    }

  }




  const dropHandler = async (e, category) => {
    console.log("dropped");
    const vid = (JSON.parse(e.dataTransfer.getData("video")))
    category.video.push(vid)
    const result = await updateCategory(category.id, category)
    console.log(result)
    if (result.status == 200) {
      toast.success(`${vid.title} video added to ${category.title}`)
      getData()

    }
    else {
      toast.error("video-category Adding Failed!!")
    }


  }


  const dragOverHandler = (e) => {
    console.log("dragging over")
    e.preventDefault()

  }
















  return (

    <>
     <div className='container-fluid border border-3 border-light p-2 mt-3'>
  {
    CategoryList.length > 0 ? (
      CategoryList.map(item => (
        <div key={item.id} className='m-2 p-3 mb-3 border'>
          <div className='d-flex justify-content-between' 
               onDragOver={(e) => dragOverHandler(e)} 
               onDrop={(e) => dropHandler(e, item)}>
            <h3>{item.title}</h3>
            <button className='btn' onClick={() => deleteCat(item.id)}>
              <i className="fa-solid fa-trash" style={{color: "#e5153f"}} />
            </button>
          </div>
          
          <div className="border border-light mt-2">
            {
              item?.video?.length > 0 &&
              item.video.map(vid => (
                <Videocard video={vid} cat={true} key={vid.id} />
              ))
            }
          </div>
        </div>
      ))
    ) : (
      <h5>No categories</h5>
    )
  }
</div>

    
    </>
  )
}

export default Categorylist