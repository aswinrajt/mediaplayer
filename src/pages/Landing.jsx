import React from 'react'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>

    <div className='container-fluid mb-5 d-flex align-item-center' style={{height:'80vh'}}>
      <Row>
        <Col className='p-5 'sm={12} md={6}>
        <h2>MEDIA PLAYER</h2>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis facilis esse harum praesentium tempora consequuntur sed impedit, eius saepe ad voluptate obcaecati natus quos, voluptatem fugit magni similique cum!</p>
          
          <div className='d-grid'>
            <Link to={'/home'} className='btn btn-danger'>Let's Go</Link>
          </div>
          
          
          </Col>
          <Col className='py-4' sm={12} md={6}>
          <img src="https://img.freepik.com/free-vector/video-files-concept-illustration_114360-4758.jpg?t=st=1724136622~exp=1724140222~hmac=2f1b8e0c9f7483e73455653418b9ea099c493264434c36d6caf40fd5a2d0f9b1&w=740https://www.freepik.com/vectors/video-pnghttps://image.similarpng.com/very-thumbnail/2020/08/Youtube-Video-concept-illustration-young-people-using-mobile-on-tranaparent-background--PNG.png" alt=""  className='img-fluid rounded'/>
          </Col>
      </Row>
      </div>

      <div className='container-fluid mt-5  '>

        <h3 className='text-center'>FEATURES</h3>

        <div className='justify-content-around p-4 d-flex'>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'250px'} src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif"  />
      <Card.Body>
        <Card.Title>Upload youtube videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height={'250px'} src="https://cdn.dribbble.com/users/539800/screenshots/2892313/dribble_category_icons.gif" />
      <Card.Body>
        <Card.Title>Add categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  height={'250px'} src="https://i.pinimg.com/originals/3f/d8/ae/3fd8ae93318cf0b4e6e209e2bd815c76.gif" />
      <Card.Body>
        <Card.Title>Browsing history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>





        </div>



      </div>

      <div className='p-5'>
        <Row>
          <Col sm={12} md={7}>
          <h4>Simple and Faster</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est libero deleniti, aut praesentium iure sequi corrupti officiis laboriosam et exercitationem ipsa quasi cumque natus accusamus aliquam voluptas eum obcaecati.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=s5DMMSV-fhZAfNPb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    
    
    
    
    </>
  )
}

export default Landing