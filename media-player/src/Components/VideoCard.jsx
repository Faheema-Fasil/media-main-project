import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'




function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={'100%'} height={'290px'} onClick={handleShow} src="https://i.pinimg.com/originals/57/a5/01/57a5010a22a577ca1825669a144cc453.jpg" />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>Card Title</Card.Title>
        </div>
        
        <Button variant="primary"><i class="fa-solid fa-trash fa-xl"></i></Button>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/oZfQAYRlL0E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
