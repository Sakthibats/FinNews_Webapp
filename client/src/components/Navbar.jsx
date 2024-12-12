import React from 'react'

function Navbar() {
  return (
    <div className='rounded'>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <p className='logo colorify'><strong>PortfolioViz</strong></p>
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <h1> Portfolio</h1>
                </div>
                <div class="navbar-item">
                    <h1> Account</h1>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar