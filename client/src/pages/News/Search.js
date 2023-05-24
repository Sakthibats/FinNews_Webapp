import React, { useState } from 'react'
import Loader from '../../components/Loader';
import TableNews from './TableNews';

function Search() {

  const [topic, setTopic] = useState(null)
  const [items, setItems] = useState(null)

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

  async function test(event){
    event.preventDefault();
    setItems(null)
    const top = titleCase(event.currentTarget.elements.stocktopics.value)
    setTopic(top)
    const val = await fetch(`/query/${top}`).then((response)=> response.json()).then(data =>data);
    setItems(val)
  }

  return (
    <div className="d-flex main rounded-3 mb-3">
      <h3>Search Stock Topic</h3>
      <form onSubmit={test}>
        <div className="input-group input-group-lg mt-4">
          <span className="input-group-text" id="inputGroup-sizing-lg"><label htmlFor="stocktopics"> Asset</label></span>
          <input type="text" maxLength={50} className="form-control" id="stocktopics" placeholder='Stock, ETF, Country, Topic' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-outline-success mt-3" style={{"width":"20vh"}}>Search Query</button>
        </div>
      </form>
      {topic?items?<TableNews items={items} topic={topic}/>:<Loader/>:null}
    </div>
  )
}

export default Search