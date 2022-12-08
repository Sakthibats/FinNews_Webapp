import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import Enter from './pages/Enter';
import LandingPage from './pages/Landing/LandingPage';
import Search from './components/Search';
import PrivateRoute from './components/PrivateRoute';


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
              <Route exact path="/" element={<Enter/>} />
              <Route exact path="/search" element={<Search />} />
            </Route>
            <Route exact path="/welcome" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;