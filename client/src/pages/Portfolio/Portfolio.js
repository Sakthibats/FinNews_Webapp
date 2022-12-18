import React, { useState } from 'react'
import Watchlists from './Watchlists'
import { useNavigate } from 'react-router-dom';


function Portfolio() {
  const [Watchlist, setWatchlist] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="d-flex main rounded-3 mb-3">
        <h2>Portfolio</h2>
        <h4 style={{'text-align':'left', 'margin':'0px'}}>Watchlist</h4>
        <Watchlists />
        {Watchlist?null:<p>No watchlists created yet. Try creating </p>}

    </div>
  )
}

export default Portfolio