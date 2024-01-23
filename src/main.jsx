import React from 'react'
import ReactDOM from 'react-dom/client'
import ClearOrLoad from './components/ClearOrLoad.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
    <div id = 'form'>
    <ClearOrLoad />
    <GeneralInfo />
    <Education />
    <Experience />
    <Skills />
    </div>

    <div id="resume">
      <h1>RESUME</h1>
      <div id="resume-paper">

      </div>
    </div>
    </div>
  </React.StrictMode>,
)
