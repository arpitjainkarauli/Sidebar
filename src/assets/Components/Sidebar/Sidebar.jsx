import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebarmain'>
        <ul className='sidebarlists'>
            <Link to="Document"><li className='sidebaritems sidebaritems1'>Document</li></Link>
            <Link to="Framework"><li className='sidebaritems sidebaritems2'>Framework</li></Link>
            <Link to="About"><li className='sidebaritems sidebaritems3'>About US</li></Link>
            <Link to="Queries"><li className='sidebaritems sidebaritems4'>Queries</li></Link>
            <Link to="Components"><li className='sidebaritems sidebaritems5'>Components</li></Link>
        </ul>
    </div>
    
  )
}export default Sidebar
