import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




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


{/* Add modal */}
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
                {/* floating form */}
               <FloatingLabel
                          controlId="floatingInput1"
                          label="Video Id"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="Video Id" />
                        </FloatingLabel>
               <FloatingLabel
                          controlId="floatingInput2"
                          label="Video Title"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="Video Title" />
                        </FloatingLabel>

                        <FloatingLabel
                          controlId="floatingInput3"
                          label="Image URL"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="Image URL" />
                        </FloatingLabel>

                        <FloatingLabel
                          controlId="floatingInput4"
                          label="Video URL"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="Video URL" />
                        </FloatingLabel>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Cancel</Button>
              </Modal.Footer>
            </Modal>

    </>
  )
}

export default Add
