import { useState } from "react"
import React from 'react'
import { Modal,Button,Form, FloatingLabel } from "react-bootstrap"
import { saveVideoAPI } from "../services/allAPI"


const Add = ({setAddResponseFromHome}) => {

    const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)
    const [videoDetails,setVideoDetails] = useState({
      caption:"",
      imageURL:"",
      videoURL:""
    })
    console.log(videoDetails);
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const extractingEmbedLinkFromYoutubeLink=(userInputYoutubeLink)=>{
      // creating embed from youtube link
      if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v="))
      {
        setInvalidYoutubeLink(false)
        console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
        const videoID=userInputYoutubeLink.split("v=")[1].slice(0,11)
        setVideoDetails({...videoDetails,videoURL:''})
        setVideoDetails({...videoDetails,videoURL:`https://www.youtube.com/embed/${videoID}`})
      }
      else{
        setInvalidYoutubeLink(true)
        setVideoDetails({...videoDetails,videoURL:""})
      }
    }

    const handleUploadVideo= async()=>{
      const {caption,imageURL,videoURL}=videoDetails
      if(caption,imageURL,videoURL){
        // alert("Cool bro")
        try{
           const result= await saveVideoAPI(videoDetails)
           console.log(result);
           if(result.status>=200 && result.status<=300){
            alert("Video Uploaded successfully!!!")
            handleClose()
            // pass result to view component
            setAddResponseFromHome(result)
           }
           else{
            console.log(result);
           }
        }
        catch(err){
          console.log(err); 
        }
      }
      else{
        alert("Fill form completely")
      }
    }

  return (
    <>
        <div className="d-flex align-items-center">
            <h5>Upload a new video</h5>
            <button className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow}>+</button>
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="border rounded p-3">
         <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Caption" />
      </FloatingLabel>
      <FloatingLabel className="mt-3" controlId="floatingUrl" label="Video Image URL">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageURL:e.target.value})} type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel className="mt-3" controlId="floatingLink" label="Video YouTube Link">
        <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video YouTube Link" />
      </FloatingLabel>
      {
        invalidYoutubeLink &&
        <div className="text-danger fw-bolder mt-2">Invalid YouTube Link. Please try again.</div>
      }
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btn-warning" onClick={handleUploadVideo}>Add Video</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add