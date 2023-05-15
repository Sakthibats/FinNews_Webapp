import React, { useState } from 'react'
import Watchlists from './Watchlists'
import { useNavigate } from 'react-router-dom';
import StockAdder from './StockAdder';


function Portfolio() {
  const [Watchlist, setWatchlist] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="d-flex main rounded-3 mb-3 justify-content-md-end">
          <h2>Portfolio</h2>
          <h4 style={{'textAlign':'left', 'margin':'0px'}}>Watchlist</h4>
          <Watchlists />
      </div>
      <div className="d-flex main rounded-3 mb-3 justify-content-start">
        <h2 style={{'textAlign':'left', 'marginBottom':'10px'}}>New Portfolio</h2>
          <StockAdder />
      </div>
    </>
  )
}

export default Portfolio