import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { InfoProvider } from './Context';
import Enter from './pages/Enter';
import LandingPage from './pages/LandingPage';
import Search from './components/Search';


function App(){
  return (
    <InfoProvider>
      <AppContainer />
    </InfoProvider>
  )
}

function AppContainer() {
  return (
    <div className='fullapp'>
      <div className="d-flex flex-column container">
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/logged" element={<Enter />} />
              <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;