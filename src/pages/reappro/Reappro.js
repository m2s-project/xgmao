import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./reappro.css"
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
const Reappro = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='reappro'>
   <div className="col-12 title">
        <Breadcrumbs />
        <div>Autres..</div>{" "}
      </div>
    
      <div className='col-6'>réapprovisionnement</div>
      <div className='col-4'>col-4</div>
      <div className='col-2'>col-2</div>
    </div>
  )
}

export default Reappro
