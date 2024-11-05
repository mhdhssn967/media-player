import React,{useState} from 'react'
import { Modal,Card } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from "../services/allAPI"
import './vcard.css'

const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const {caption,videoURL}=displayData
    const sysDateTime=new Date()
    const timeStamp=sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    
    const historyDetails={caption,videoURL,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      }
    }

    const deleteVideo=async(id)=>{
      try{
        const result=await removeVideoAPI(id)
        setDeleteVideoResponseFromVideoCard(result)
      }
      catch(err){
        console.log(err);
        
      }
    }

    const videoDragStarted=(e,dragVideoDetails)=>{
      console.log(dragVideoDetails.id);
      e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    }

  return (
    <>
    <Card draggable={true} onDragStart={e=>videoDragStarted(e,displayData)} style={{ height: '250px' }} className='vidCard mt-4' >
      <Card.Img onClick={handleShow} variant="top" src={displayData?.imageURL} height={'150px'} style={{cursor:'pointer'}}/>
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {!insideCategory &&
            <button className='btn' onClick={()=>deleteVideo(displayData?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
          }
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="770" height="420" src={`${displayData?.videoURL}?autoplay=1`} title="Caption" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard