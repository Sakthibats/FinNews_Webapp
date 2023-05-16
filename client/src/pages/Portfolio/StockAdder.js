import React, { useState } from 'react'
import NewStockRow from './NewStockRow'

function StockAdder() {
  const [addList, setAddList] = useState([])

  const handleAddRow = () => {
    setAddList([...addList, {}]);
  };

  const handleRemoveRow = (index) => {
    const newList = [...addList];
    newList.splice(index, 1);
    setAddList(newList);
  };

  return (
    <>
      <div className="d-flex main rounded-3 mb-3 justify-content-start">
        <h2 style={{'textAlign':'left', 'marginBottom':'10px'}}>New Portfolio</h2>  
        <div className='round'>
          <table className='table table-hover'>
              <thead>
                  <tr className='table-dark'>
                      <th className='col-3' scope="col">Ticker</th>
                      <th className='col-3' scope="col">Name</th>
                      <th className='col-2' scope="col">Units</th>
                      <th className='col-2' scope="col">Price</th>
                      <th className='col-2' scope="col">Value</th>
                      <th className='col-2' scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                {addList.map((item, index) => (
                  <NewStockRow
                    key={index}
                    index={index}
                    handleRemoveRow={handleRemoveRow}
                  />
                ))}
              </tbody>
          </table>
        <button className='btn thematify btn-light' onClick={handleAddRow}>Add Row</button>
        {/* <button className='btn thematify btn-light' onClick={handleAddRow}>Save Portfolio</button> */}
        </div>
      </div>
    </>
  )
}

export default StockAdder