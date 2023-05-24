import React, { useState } from 'react'
import Watchlists from './Watchlists'
import StockAdder from './StockAdder';

function Portfolio() {
  const [Watchlist, setWatchlist] = useState(false)

  return (
    <>
      <Watchlists />
      <StockAdder />
    </>
  )
}

export default Portfolio