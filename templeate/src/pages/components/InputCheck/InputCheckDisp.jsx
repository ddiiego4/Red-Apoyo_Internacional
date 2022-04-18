import React from 'react'
import './InputCheck.css'


const InputCheckdDisp = () => {
    

  //  function upHouse(){
    //    if(!form.Estado){
      //  setForm({
        //    "Estado": true
        //})
    //}else{
      //  setForm({
        //    "Estado": false
        //})
    //}   
    //}

    return (
    <div>
        <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="Estado"
                
               
                >Estado</input>
              </div>
    </div>
  )
}

export default InputCheckdDisp;