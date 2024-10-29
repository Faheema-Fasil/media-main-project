import React from 'react'
import { Button, Card } from 'react-bootstrap'



function VideoCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={'100%'} height={'290px'} src="https://i.pinimg.com/originals/57/a5/01/57a5010a22a577ca1825669a144cc453.jpg" />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>Card Title</Card.Title>
        </div>
        
        <Button variant="primary"><i class="fa-solid fa-trash fa-xl"></i></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default VideoCard
