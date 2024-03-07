import React from 'react'
import "./showcase.css"
import Home from '../Home/Home.jsx'
import Document from '../Sidebar/Document/Document.jsx'
import Framework from '../Sidebar/Framework/Framework.jsx'
import About from '../Sidebar/About Us/About.jsx'
import Queries from '../Sidebar/Queries/Queries.jsx'
import Component from '../Sidebar/Component/Component.jsx'
import { Routes,Route } from 'react-router-dom'

function Showcase() {
  return (
    <div className="showcasebody">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Document' element={<Document/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Component' element={<Component/>}></Route>
        <Route path='Framework' element={<Framework/>}></Route>
        <Route path='Queries' element={<Queries/>}></Route>
      </Routes>
    </div>      
  )
}

export default Showcase
