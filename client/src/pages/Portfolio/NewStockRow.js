import React, { useEffect } from 'react'
import AsyncSelect from 'react-select/async';


function NewStockRow({ stats, handleRemoveRow, handleAddRow, handlestats, checkTicker, checkKey}) {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [value, setValue] = React.useState('');

    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          zIndex: 1, // Increase the z-index value to bring the dropdown menu forward
        }),
      };

    async function confirmChoice(name){
        const tickercheck = checkTicker(name.label)
        const keycheck = checkKey(name.label, stats.key)
        if (tickercheck && !keycheck){
            alert('Ticker already exists')
            handleRemoveRow(stats.key)
        }else if  (!keycheck){
          setPrice(-1)
          setName(name.value)
          handleAddRow()
          setUnit(1)
          const price = await fetch(`Utility/QuoteEndpoint/${name.label}`);
          const data = await price.json();
          setPrice(data["Global Quote"]["05. price"])
          handlestats(stats.index, name.label, name.value, data["Global Quote"]["05. price"], 1) 
        }           
    }

    const loadOptions = async (inputValue) => {
        try{
            if(inputValue.length>0){
                const response = await fetch(`/Utility/tickerOptions1/${inputValue}`);
                const data = await response.json();
                return data
            }
        }catch(err){
            console.log(err)
        }
      };

    useEffect(() => {
        // round value to 3 decimal places
        setValue((price*unit).toFixed(3))
    }, [price, unit])

    function alterValue(event) {
        if (event.target.value < 1){
          alert("Units must be greater than 0")
        }else{
          const newUnit = event.target.value;
          setUnit(newUnit);
        }
    }

    return (
      <tr>
        <td>
        <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={loadOptions}
            placeholder="Search for a ticker/name"
            onChange={confirmChoice}
            styles={customStyles} 
        />
        </td>
        <td>
          <input className="form-control" type="text" name={`name${stats.key}`} placeholder='Name' value={name} disabled/>
        </td>
        <td>
          <input className="form-control" type="number" name={`units${stats.key}`} placeholder='Units' value={unit} onChange={alterValue}/>
        </td>
        <td>
          <input className="form-control" type="text" name={`Price${stats.key}`} placeholder='Price' value={price !==-1 ? price : 'Loading...'} disabled/>
        </td>
        <td>
          <input className="form-control" type="text" name={`value${stats.key}`} placeholder='Value' value={value} disabled/>
        </td>
        <td>
          <button className='btn btn-danger' onClick={() => handleRemoveRow(stats.key)}>Remove</button>
        </td>
      </tr>
    );
  }

export default NewStockRow