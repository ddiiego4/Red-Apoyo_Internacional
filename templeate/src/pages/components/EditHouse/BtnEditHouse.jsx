import React, { useEffect, useState } from 'react'
import axios from 'axios';


function edit_House(setdb) {

}


const BtnEditHouse = (setForm) => {
    const [form, setform] = useState([]);
   
    const [db, setdb] = useState({

        "direction": "",
        "description": "",
        "startAvailabilityDate": "",
        "finishAvailabilityDate": "",
        "latitude": 0,
        "longitude": 0,
        "photos": [
            {
                "id": 1,
                "url": "https://storage.googleapis.com/isnft-e16b6.appspot.com/27651e81-78f2-4ee1-b6de-678fcf807600svg"
            }]});

    

    return (
        <div>
            <button type='button' className='btn btn-outline-dark' onClick={() => edit_House(setdb)}> Editar</button>

            <div>{db.description}</div>
            <div>{db.description.split("-")[0]}</div>
            <div>{db.description.split("-")[1]}</div>
            <div>{db.description.split("-")[2]}</div>
            <div>{db.description.split("-")[3]}</div>

        </div>
    )
}

export default BtnEditHouse