import React from 'react'
import { BsPlusCircleFill  } from "react-icons/bs";

function Portfolio() {
  return (
    <>
      <div className="d-flex main rounded-3 mb-3 flex-row">
        {/* Graphs Section */}
        <div className='d-flex flex-column flex-shrink-1 text-start ps-3 w-75'>
          <h3>Graphs</h3>
          <div className='flex-fill returns rounded-3'>
            {/* Add your Graphs content, e.g., a chart */}
          </div>
        </div>

        {/* WatchList Section */}
        <div className='d-flex flex-column w-25'>
          <div className='d-flex justify-content-center'> 
            <h3 style={{display:"inline"}}>WatchList</h3>
            <span style={{verticalalign:"bottom"}}><BsPlusCircleFill /></span>
          </div>
          {/* <h3 style={{display:"inline"}}>WatchList <BsPlusCircleFill /> */}
          
          <div className='flex-fill ms-3'>
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <th scope="row">Tesla</th>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>        
    </>
  )
}

export default Portfolio