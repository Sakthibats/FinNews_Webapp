import React, { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

function Watchlists() {
  const [Watchlist, setWatchlist] = useState([])
  const [addStock, setAddStock] = useState(false)

  console.log(addStock)
  return (
    <>  
        <div className='d-md-flex justify-content-md-end'>
          <p className={(addStock ? 'inprogress' : 'thematify') +" linkable"} onClick={()=>setAddStock(!addStock)}> {[["Edit List", "Create New List" ][Watchlist.length==0?1:0], "Save"][addStock ? 1 : 0]} <AiFillPlusCircle /></p>
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
        {Watchlist.length==0?<p>No watchlists created yet. Try creating </p>:null}

    </>
  )
}

export default Watchlists