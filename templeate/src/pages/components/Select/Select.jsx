
import React, { componentDidMount, useEffect, useState } from 'react'
import axios from 'axios'

const Select = ({atributos, form}) => {


  const [country, setcountry] = useState([])
  
async function useEffect(){

  axios
  .get("https://isnft-prod.azurewebsites.net/api/country")
  .then((resp) => {
    setcountry(resp.data);
  })
  .catch((er) => {
      console.log(er);
    })

  }
  useEffect()


  return (
    <div>
      <select name="country" className='form-control' onChange={() => atributos.handleChange}>
        {country.map((item, index) =>
            <><option key={index} value={item.id}>{item.name}</option>
            <div className='In_puts'>
          </div></>
        )}
      </select>
    </div>
  )

}
export default Select