import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex">
      <h2>
        Add Category
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
              centered
             > 
              <Modal.Header closeButton>
                <Modal.Title>Category Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* floating form */}

                        <FloatingLabel
                          controlId="floatingInput4"
                          label="Category Name"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder=" Name" />
                        </FloatingLabel>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Add</Button>
              </Modal.Footer>
            </Modal>

    </>
  )
}

export default Category
