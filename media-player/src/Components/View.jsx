import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

function View() {
  return (
    <>
      <Row className='ms-5'>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
       
      </Row>
    </>
  )
}

export default View
