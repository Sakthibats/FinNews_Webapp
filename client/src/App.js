import React from 'react'
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='fullapp'>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;