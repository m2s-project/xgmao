import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./dashboard.css"
const Dashboard = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='dashboard'>
      Dashboard : { location.pathname}
    </div>
  )
}

export default Dashboard
