import React from 'react'
import ReactDOM from 'react-dom/client'
import ClearOrLoad from './ClearOrLoad.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClearOrLoad />
    <GeneralInfo />
    <Education />
    <Experience />
  </React.StrictMode>,
)
