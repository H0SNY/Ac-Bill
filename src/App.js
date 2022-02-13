import './App.css'
import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import Main from './components/Main'
import PdfView from './components/PdfView'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path = "pdf" element = {<PdfView/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
