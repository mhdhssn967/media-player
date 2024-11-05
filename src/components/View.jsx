import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI } from '../services/allAPI'
import { useEffect,useState } from 'react'

const View = ({addResponseFromHome,deleteResponseFromcategory}) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
    
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromcategory])
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

  return (
    <>
     <Row> 
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