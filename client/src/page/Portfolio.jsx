import React, { useState } from 'react'
import './Portfolio.css'
import EfficientFrontier from '../components/PortfolioTab/EfficientFrontier'
import EmptyPortfolio from '../components/PortfolioTab/Emptyportfolio'
import AssetsTable from '../components/PortfolioTab/AssetsTable'

function Portfolio() {

  const [portfolioExists, setPortfolioExists] = useState(false)

  return (
    <div class="mx-6 full-height">
      <div className='container px-4 has-text-left'> 
        <h1>Efficient Frontier</h1>
      </div>
      {portfolioExists? <EfficientFrontier />: <EmptyPortfolio />}
      <AssetsTable />
    </div>
    
  )
}

export default Portfolio