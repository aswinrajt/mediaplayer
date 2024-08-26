import React from 'react'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
      <div className='bg-light py-2 container-fluid'>
       
       <Row className='p-5'>
       <Col sm={12} md={5}>
       <h3>Media player</h3>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
         asperiores
         quod officia possimus quae non ducimus recusandae
         aliquid at repudiandae vitae incidunt, excepturi, 
         omnis qui a in. Quas, veritatis blanditiis.</p>
  
  
       </Col>
       <Col sm={12} md={2}>
       <h3>Links</h3>
       <div className='d-flex flex-column'> 
      <Link to={'/'}>Landing</Link>
      <Link to={'/home'}>Home</Link>
      <Link to={'/his'}>Watch history</Link>
      </div>
  
  
       </Col>
       <Col sm={12} md={5}>
       <h3>Feedback</h3>
       <textarea name="" id="" className='form-control'></textarea>
       <button className='btn btn-info mt-4'>Send</button>
  
  
       </Col>

       <h6 className='text-center pt-4'>MEDIA PLAYER 2024 ALL RIGHTS RESERVED</h6>
       </Row>
        
      </div>
   </>
  )
}

export default Footer