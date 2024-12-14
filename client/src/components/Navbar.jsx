import React from 'react'

function Navbar() {
  return (
    <nav class="navbar themecol rounded mx-6 my-4" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="">
                <p className='logo colorify'><strong>PortfolioViz</strong></p>
            </a>
        </div>
        <div class="navbar-end mr-2">
            <div class="navbar-item">
                <h1> Portfolio</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar