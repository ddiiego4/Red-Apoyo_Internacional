import { helpHttp } from "./helpHttp";
import axios from "axios";

const DbUrl = "https://isnft-prod.azurewebsites.net/api/users";

const CrearUsuario = (data, setErr, setForm, setLoad) => {
  //console.log(data.id);

  let state = {
    datos: {
      email: data.email,
      password: data.password,
      person: {
        birthday: data.birthday,
        cityId: data.countryId,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
      },
      userName: data.userName,
    },
  };

  console.log(data);

  axios
    .post(DbUrl, state.datos, {
      headers: {
        "accept": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sIjpbeyJhdXRob3JpdHkiOiJob3N0In0seyJhdXRob3JpdHkiOiJ0cmF2ZWxlciJ9XSwibmFtZSI6ImRrYjRyYiIsImVtYWlsIjoiamp1YW5uY2E2NTFAZ21haWwuY29tIiwiaWF0IjoxNjQ5MTYwNzg3LCJleHAiOjE2NDkyNDcxODd9.v4KtNtkrqNDXsI1PWaj6ME7QPgmsPzRd6KkfOyBYTqoGZ4xJHLeK9j7Yzd3kixVDGiHys0IUaO-oef01e5TNkw",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        // window.location.href="./Login"
      });
    }, 2000);
};
export default CrearUsuario;
