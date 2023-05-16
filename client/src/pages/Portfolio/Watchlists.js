import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';


function Watchlists() {
  const [Watchlist, setWatchlist] = useState([])
  const [addStock, setAddStock] = useState(false)

  console.log(addStock)
  return (
    <>
      <div className="d-flex main rounded-3 mb-3 justify-content-md-end">
          <h2 style={{'textAlign':'left', 'margin':'0px'}}>Watchlists</h2>
          <div className='d-md-flex justify-content-md-end'>
            <p className={"thematify linkable"}> Create New List <AiFillPlusCircle /></p>
          </div>  
          <div className='round'>
            <table className='table table-hover'>
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Watchlist Name</th>
                        <th scope="col">Value</th>
                        <th scope="col">7 days</th>
                        <th scope="col">30 days</th>
                        <th scope="col">52 weeks</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
          </div>
          {Watchlist.length===0?<p>No watchlists created yet. Try creating </p>:null}
      </div>

    </>
  )
}

export default Watchlists