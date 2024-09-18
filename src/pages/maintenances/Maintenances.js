import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./maintenances.css"
const Maintenances = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='maintenances'>
      <div> { location.pathname}</div>
    
      <div className='col-6'>col-6</div>
      <div className='col-4'>col-4</div>
      <div className='col-2'>col-2</div>
    </div>
  )
}

export default Maintenances
