import React from "react";
import { helpHttp } from "./helpHttp";
import Exist from "../components/Messages/Exist/Exist";

const DbUrl="http://localhost:3001/usuarios";
let api = helpHttp();



const CrearUsuario = (form, setErr) => {
    
    let options = {
        body: form,
        Headers: {"content-type":"application/json"}
    }

    api.get(DbUrl).then((res) => {
        if(!res.err){
            let index = 0;
            while(index < res.length){
                var resp = res[index];
                if(resp.username === form.username){
                    //console.log(resp.username);
                    //console.log(resp);
                    alert('El nombre de usuario ya existe');
                }
                else{
                    api.post(DbUrl, options).then((res) => {
                        if(!res.err){
                            alert('Se creo correctamente el usuario');
                        }else{
                            setErr(res);
                        }
                    })
                }
                index++;
            }
        };
    });
 
}
export default CrearUsuario;