import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:'grey'}} >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/11620/11620813.png?semt=ais_hybrid"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span style={{
              fontSize:'30px'
            }}>MEDIA-PLAYER</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
