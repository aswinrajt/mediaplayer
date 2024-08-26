import React from 'react'
import Videocard from './Videocard'
import { Row,Col } from 'react-bootstrap'

function Videos() {
  return (
   <div className='border border-3 shadow p-5 mb-3'>
        <Row>
        <Col>
        <Videocard/>
        </Col>
    </Row>
   </div>  )
}

export default Videos