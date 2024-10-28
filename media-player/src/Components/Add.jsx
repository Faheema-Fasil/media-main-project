import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';



function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex">
      <h2>
        Upload Videos
      </h2>
      <button onClick={handleShow} className='btn'>
      <i class="fa-solid fa-arrow-up-from-bracket fa-2xl" style={{color: "#000000;"}}></i>
      </button>
    </div>



            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
             > 
              <Modal.Header closeButton>
                <Modal.Title>Video title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Do not even try to press
                escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>

    </>
  )
}

export default Add
