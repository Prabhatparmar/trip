import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Iternary from './Pages/Iternary'
import Dashboard from './Pages/Dashboard'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Homepage/>}></Route>
          <Route path="iternary" element = {<Iternary/>}></Route>
          <Route path="dashboard" element = {<Dashboard/>}></Route>
        </Routes>
      </Router>
      </>
  )
}

export default App
