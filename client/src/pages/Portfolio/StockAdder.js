import React, { useState } from 'react'
import NewStockRow from './NewStockRow'
import { useFunc } from '../../context/FunctionalContext'
import { AiTwotoneSave } from "react-icons/ai";
import Portfolio from './Portfolio';


function StockAdder() {
  const {setPortfolio, Portfolio, num, setnum} = useFunc()
  const [addList, setAddList] = useState(Portfolio)
  const [edit, setEdit] = useState(false)

  console.log(addList)

  const handleAddRow = () => {
    setEdit(true)
    addList.push({"key":num, "index":num, "ticker":'', "name":'', "price":'', "unit":''})
    setnum(num+1)
  };

  const handleRemoveRow = (key) => {
    console.log(addList)
    var newList = [...addList];
    newList= newList.filter((item) => item.key !== key);
    setAddList(newList);
  };

  const checkTicker = (ticker) => {
    const tickerExists = addList.some((item) => item.ticker === ticker);
    return tickerExists
  }

  const checkKey = (ticker, key) => {
    const keyExists = addList.some((item) => item.key === key && item.ticker === ticker);
    return keyExists
  }

  const handlestats = (key, ticker, name, price, unit) => { 
    var stockindex = addList.findIndex((item) => item.key === key)
    addList[stockindex]["ticker"] = ticker
    addList[stockindex]["name"] = name
    addList[stockindex]["price"] = price
    addList[stockindex]["unit"] = unit
    console.log(addList)
  }

  const savePortfolio = () => {
    setEdit(false)
    const filteredList = addList.filter(item => item.ticker !== '');
    console.log("ADDLIST COMING")
    console.log(addList)
    console.log("FILTERED LIST COMING")
    console.log(filteredList)
    console.log("PORTFOLIO COMING")
    console.log(Portfolio)
    setPortfolio(filteredList)
    setAddList(filteredList)
  }

  return (
    <>
      <div className="d-flex main rounded-3 mb-3 justify-content-start">
        <div className="d-flex justify-content-between mb-2">
          <h2>New Portfolio</h2>
          {edit ? <button className='btn thematify btn-light' onClick={savePortfolio}>Save <AiTwotoneSave/> </button> : <button className='btn thematify btn-light' onClick={handleAddRow}>Edit</button>}
        </div>
        
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
                    key={item.key}
                    handleRemoveRow={handleRemoveRow}
                    handleAddRow={handleAddRow}
                    stats={item}
                    handlestats={handlestats}
                    checkTicker={checkTicker}
                    checkKey={checkKey}
                    editmode={edit}
                  />
                ))}
              </tbody>
          </table>
          {edit ? <button className='btn thematify btn-light' onClick={handleAddRow}>Add row</button>: null}
        </div>
      </div>
    </>
  )
}

export default StockAdder