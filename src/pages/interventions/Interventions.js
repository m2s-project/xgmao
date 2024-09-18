import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./interventions.css"

const Interventions = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='interventions'>
      <div> { location.pathname}</div>
    
      <div className='col-6'>col-6</div>
      <div className='col-4'>col-4</div>
      <div className='col-2'>col-2</div>
    </div>
  )
}

export default Interventions
