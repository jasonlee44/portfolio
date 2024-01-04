import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Resume />
  </>
)
