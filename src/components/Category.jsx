import React,{useEffect, useState} from 'react'
import { FloatingLabel, Form, Modal,Button } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, saveCategoryAPI, saveVideoAPI, updateCategoryAPI,removeVideoAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({setDeleteResponseFromCategory}) => {
  const [allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setCategoryname]=useState("")

  const handleSaveCategory=async()=>{
    if(categoryName){
      const categoryDetails={categoryName,allVideos:[]}
      try{
        const result=await saveCategoryAPI(categoryDetails)
        if(result.status>=200 && result.status<300){
          alert("Category Created")
          getAllCategories()
          handleClose()
        }
      }
      catch(err){
        console.log(err); 
      }
    }
     else{
      alert("Please provide a name to your category!!!")
     } 
    }
    
    const getAllCategories=async()=>{
      try{
        const result=await getAllCategoryAPI()
        if(result.status>=200 && result.status<300){
          console.log(result.data);
          setAllCategories(result.data)
        }
      }catch(err){
        console.log(err);
      }
    }


    const deleteCategory=async(id)=>{
      try{ 
       await deleteCategoryAPI(id)
       getAllCategories()
     }catch(err){
       console.log(err);
     }
     }

    useEffect(()=>{
      getAllCategories()
    },[])

    const dragoverCategory=(e)=>{
      e.preventDefault()
    }


   const videoCardDropOverCategory=async(e,categoryDetails)=>{
    console.log('Category',categoryDetails);
    const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
    // update category by adding video to all videos
    categoryDetails.allVideos.push(videoDetails)
    // API call to update JSON
    await updateCategoryAPI(categoryDetails)
    getAllCategories()
    const result=await removeVideoAPI(videoDetails.id)
    setDeleteResponseFromCategory(result)
   }

  return (
    <>
     <div className='d-flex justify-content-around align-items-center'>
     <h3>All Categories</h3>
     <button className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow}>+</button> 
     </div>

    {/* Display all Category */}
    <div className="container-fluid mt-4">
      {/* Single Category */}
      {allCategories?.length>0?
      allCategories?.map(categoryDetails=>(
        <div droppable="true" onDragOver={dragoverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
        <div className="d-flex justify-content-between">
          <h5>{categoryDetails?.categoryName}</h5>
          <button className='btn' onClick={()=>deleteCategory(categoryDetails?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          {/* Display Ctegory Videos */}
          <div className='row mt-2' >
            {
            categoryDetails?.allVideos?.length>0 &&
            categoryDetails?.allVideos?.map(video=>(
              <div key={video?.id} className='col-lg-4'>
                <VideoCard insideCategory={true} displayData={video}/>
              {/* Video card */}
              </div>
            ))
            }
          </div>
        </div>)):
        <div className='fw-bolder text-danger fs-5'>No Categories are added yet!!</div>
        }
      </div>
      
     <Modal
     centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingPassword" label="Category Name">
        <Form.Control onChange={e=>setCategoryname(e.target.value)} type="text" placeholder="CategoryName" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category