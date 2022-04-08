import React from 'react'
import './InputCheck.css'


const InputCheck = ({form, handlechange, setForm}) => {
    

    function upHouse(){
        if(!form.Estado){
        setForm({
            "Estado": true
        })
    }else{
        setForm({
            "Estado": false
        })
    }   
    }

    return (
    <div>
        <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="Estado"
                  onClick={() => upHouse()}
                  handlechange={handlechange}
                ></input>
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Disponibilidad
                </label>
              </div>
    </div>
  )
}

export default InputCheck