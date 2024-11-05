import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100 ' >
      <div className="d-flex justify-content-between">
        {/* Intro */}
       <div style={{height:'250px'}}>
          <h5>
              <i className='fa-solid fa-music me-2'></i>
              Media Player
              </h5>
              <p>Designed and built with all the love in the world by the Kochi team with the help of our contributors.</p>
              <p>Code licensed Luminar, docs CC BY 3.0.</p>
              <p>Currently v5.3.3.</p>
       </div>
        {/* Links */}

        <div className='d-flex flex-column'>
        <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>History Page</Link>
        </div>
        {/* Guide */}
       <div className='d-flex flex-column'>
          <h5>Guides</h5>
            <a style={{textDecoration:'none', color:'white'}}  href='https://react.dev/' target='blank'>React</a>
            <a style={{textDecoration:'none', color:'white'}} href='https://reactrouter.com/en/main' target='blank'>React Router</a>
            <a style={{textDecoration:'none', color:'white'}} href='https://react-bootstrap.github.io/' target='blank'>React Bootstrap</a>
       </div>
        {/* Contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className='d-flex'  >
            <input type="text" placeholder='Enter Your Email here' className='form-control me-2'/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href='https://x.com/?lang=en&mx=2' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-twitter'></i></a>
            <a href='https://www.instagram.com/' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-instagram'></i></a>
            <a href='https://www.facebook.com/' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-facebook'></i></a>
            <a href='https://www.linkedin.com/home?originalSubdomain=in' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-linkedin'></i></a>
            <a href='https://github.com/' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-github'></i></a>
            <a href='7025707936' target='blank' style={{textDecoration:'none', color:'white'}}><i className='fa-solid fa-phone'></i></a>
          </div>
          
        </div>
     
    </div>
    <p className='text-center'>Copyright &copy; July 2024 Batch, Media Player App. Built with react</p>
    </div>
  )
}

export default Footer