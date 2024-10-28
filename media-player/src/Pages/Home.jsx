import React from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
 import Category from '../Components/Category'
import View from '../Components/View'

function Home() {
  return (
    <>
    <div className="container mt-5 d-flex justif-content-between mb-3">

      <div className="add-videos">
        <Add/>
      </div>
       <Link to={"/watch-history"} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-primary' >
       Watch-History 
       </Link>
      
    </div>  
    <div className="container-fluid mt-5 w-100 row">
      <div className="col-lg-9 all-videos">
        <View/>
      </div>
      <div className="col-lg-3 all-category">
        <Category/>
      </div>
    </div> 
    </>
  )
}

export default Home
