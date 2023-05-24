import React, { useEffect } from 'react'
import AsyncSelect from 'react-select/async';


function NewStockRow({ index, handleRemoveRow }) {

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
        setName(name.value.split('-')[1])
        const price = await fetch(`Utility/QuoteEndpoint/${name.label}`);
        const data = await price.json();
        setPrice(data["Global Quote"]["05. price"])
        setUnit(1)
    }

    const loadOptions = async (inputValue) => {
        try{
            if(inputValue.length>0){
                const response = await fetch(`/Utility/tickerOptions/${inputValue}`);
                const data = await response.json();
                const options = data.bestMatches.map((match) => ({
                value: ['1. symbol'] + '-' + match['2. name'],
                label: match['1. symbol'],
                }));
                return options;
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
        const newUnit = event.target.value;
        setUnit(newUnit);
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
          <input className="form-control" type="text" name={`name${index}`} placeholder='Name' value={name} disabled/>
        </td>
        <td>
          <input className="form-control" type="number" name={`units${index}`} placeholder='Units' value={unit} onChange={alterValue}/>
        </td>
        <td>
          <input className="form-control" type="text" name={`Price${index}`} placeholder='Price' value={price} disabled/>
        </td>
        <td>
          <input className="form-control" type="text" name={`value${index}`} placeholder='Value' value={value} disabled/>
        </td>
        <td>
          <button className='btn btn-danger' onClick={() => handleRemoveRow(index)}>Remove</button>
        </td>
      </tr>
    );
  }

export default NewStockRow