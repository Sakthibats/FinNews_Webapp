import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import Enter from './pages/Enter';
import LandingPage from './pages/Landing/LandingPage';
import Search from './pages/News/Search';
import PrivateRoute from './components/PrivateRoute';
import Portfolio from './pages/Portfolio/Portfolio';
import ForgotPw from './pages/Landing/ForgotPw';

function App(){
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  )
}

function AppContainer() {
  return (
    <div className='fullapp'>
      <div className="d-flex flex-column container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<PrivateRoute />} >
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              {/* <Route exact path="/stock/:ticker" element={<Stock />} /> */}
              <Route exact path="/profile" element={<Enter />} />
            </Route>
            <Route exact path="/welcome" element={<LandingPage />} />
            <Route exact path="/forgot-pw" element={<ForgotPw />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;