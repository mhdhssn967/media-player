import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/cat.gif'
import feature1 from '../assets/1.jpg'
import feature2 from '../assets/2.jpg'
import feature3 from '../assets/3.jpg'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* Landing part */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to="/home" className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>

  {/* Features */}
  <div className='my-5'>
    <h3 className='text-center'>Features</h3>
    <div className='row mt-5'>
      <div className='col-lg-4'>
      <Card className='p-2' style={{ width: '25rem' }}>
      <Card.Img style={{height:'350px'}} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>
        Categorise Videos</Card.Title>
        <Card.Text>
        Categorise the videos by drag and drop feature.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4'>
      <Card className='p-2' style={{ width: '25rem' }}>
      <Card.Img style={{height:'350px'}} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text> 
        Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4'>
      <Card className='p-2' style={{ width: '25rem' }}>
      <Card.Img style={{height:'350px'}} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Enjoy Music</Card.Title>
        <Card.Text>
        Enjoy your favourite musics on the go
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  </div>
  {/* Last */}
  <div className="border rounded p-5 my-5 row align-items-center">
    <div className="col-lg-5">
      <h3 className='text-warning'>Simple, Fast & Powerful</h3>
      <p style={{textAlign:'justify'}} className='fs-5'><span className='fs-4 fw-bold'>Play Everything:</span> Play any genre of songs wherever and whenever you want</p>
      <h3 className='text-warning'>Simple, Fast & Powerful</h3>
      <p style={{textAlign:'justify'}} className='fs-5'><span className='fs-4 fw-bold'>Categorize Videos:</span> Categorize your videos according to your need</p>
      <h3 className='text-warning'>Simple, Fast & Powerful</h3>
      <p style={{textAlign:'justify'}} className='fs-5'><span className='fs-4 fw-bold'>Manage History:</span> Delete or update your watch history</p>
    </div>
    <div className='col-lg-6'>
      <iframe width="680" height="420" src="https://www.youtube.com/embed/GrG2-oX5z24" title="Relax with my cat - beats to sleep/study x Fall In Luv" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  </div>
  )
}

export default Landing