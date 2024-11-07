import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, updateCategoryAPI,saveVideoAPI } from '../services/allAPI'
import { useEffect,useState } from 'react'

const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
    
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory,setDeleteResponseFromView])
  console.log(allVideos);
  


  const getAllVideos=async()=>{
    try{
      const result=await getAllVideosAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideos(result.data)
      }
    }

    catch(err){
      console.log(err);
      
    }
  }
  const dragOverView=(e)=>{
  e.preventDefault()
}
const categoryVideoDropOverView=async(e)=>{
  console.log("Inside CategoriesVideoDropOverView");
  const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video,categoryDetails);
  // updating category by deleting video from category
  // use state lifting to communicate data from view to category
  // use api t o upload videos
  // call getall
  const updateCategoryVideoList=categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
  const updatedCategory={...categoryDetails,allVideos:updateCategoryVideoList}
    console.log(updatedCategory);
    const result=await updateCategoryAPI(updatedCategory)
    setDeleteResponseFromView(result)
    await saveVideoAPI(video)
    getAllVideos()
    
  }




return (
    <>
     <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}> 
     { 
     allVideos?.length>0?
     allVideos?.map(video=>(
      <Col key={video.id} className='mb-3' sm={12} md={6} lg={4}>
      <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
      </Col>))
      :
      <div className='fw-bolder text-danger fs-5'>No Videos are uploaded yet!!</div>}
      </Row> 
    </>
  )
}


export default View