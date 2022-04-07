import React from 'react'

const CrearUsario = (data, setErr, setForm, setLoad) => {
  return (
    <div>helpCrearUsario</div>
  );
}

export default CrearUsario;


/**
 * 
  Esta es nuestra funcion para enviar la data con nuestros headers

const tok = "https://isnft-prod.azurewebsites.net/api/";

  let statetoken = {
    datos: {
      email: data.email,
      password: data.password,
    },
    Headerss: {
      "content-Type": "application/json",
      Authorization: "",
    },
  };

  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer Hola'
  }


    axios
        .post(baseUrl, {
            "email": "doe1@doe.com",
            "password": "doe123",
            "person": {
              "birthday": "18-22-2001",
              "cityId": 1,
              "lastName": "does",
              "name": "jhond",
              "phone": "202132121"
            },
            "userName": "doee"
          }
          , {
              headers:headers
          }
          //{ email: this.state.form.email, password: this.state.form.password }
            )
            .then(response => {
                console.log(response.data);
              })
            .catch(error => {
                console.log(error);
            })
  };
  */

