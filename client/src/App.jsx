import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
// import {Account} from "./pages/Account";
import Portfolio from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="container mx-auto mt-10 px-4">
            <h2 className="text-2xl font-semibold text-gray-700">Welcome to FinNews</h2>
            <p className="mt-4 text-gray-600">
              Stay updated with the latest financial news and manage your portfolio seamlessly.
            </p>
          </div>} />
          {/* <Route path="/account" element={<Account />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;