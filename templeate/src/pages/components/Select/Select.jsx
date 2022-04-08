import React, { Component } from 'react'
import axios from 'axios'
import "./Select.css"

export default class Select extends Component {

  state = {
    Contry : []
  }
  componentDidMount(){
  axios
  .get("https://isnft-prod.azurewebsites.net/api/country")
  .then((resp) => {
    this.setState({Contry : resp.data})
    
  })
  .catch((er) => {
    console.log(er);
  })
  
}
render(){
   
    return (
      <div className='country_control'>
        <select name="country" type="submit" className='form-control' > 
          {this.state.Contry.map((item, index) =>
              <><option key={index} value={item.id}>{item.name}</option>
             </>
          )}
        </select>
      </div>
    )
  }
}