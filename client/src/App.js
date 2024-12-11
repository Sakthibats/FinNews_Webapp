import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import { FuncProvider } from './context/FunctionalContext';
import Enter from './pages/Enter';
import LandingPage from './pages/Landing/LandingPage';
import PrivateRoute from './components/PrivateRoute';
import ForgotPw from './pages/Landing/ForgotPw';
import Portfolio from './pages/Portfolio/Portfolio';

function App(){
  return (
    <AuthProvider>
      <FuncProvider>
        <AppContainer />  
      </FuncProvider>
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
              <Route exact path="/profile" element={<Enter />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
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