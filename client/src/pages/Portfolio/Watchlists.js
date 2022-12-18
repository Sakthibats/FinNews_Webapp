import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

function Watchlists() {
  return (
    <>  
        <p style={{'text-align':'right', "margin":'0px', 'marginBottom':'6px' , 'marginRight':'12px'}} className='thematify linkable'> Create  new list <AiFillPlusCircle /></p>
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
    </>
  )
}

export default Watchlists