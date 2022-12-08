import React from 'react'

function Welcome(props) {
  return (
    <>
        <h1 className="display-3 text-center text-md-start">
        Welcome to <span className='thematify'>StockScreener</span>
        </h1>
        <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
        Build more resilient portfolios using Data
        </p>
        <div className="text-center text-md-start">
            <button className="btn btn-outline-primary shadow lift me-1" onClick={()=>props.setlogin(true)} style={{"minWidth":"100px"}}>
                Login
            </button>
            <button className="btn btn-outline-primary lift" onClick={()=>props.setregister(true)} style={{"minWidth":"100px"}}>
                Sign up
            </button>
        </div>
    </>
  )
}

export default Welcome