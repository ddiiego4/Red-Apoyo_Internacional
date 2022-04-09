import React, {useState}from 'react'
import More from './More/More'
import Loader from '../Loader/Loader'
import axios from 'axios'
import "./UsrProfile.css"

function verydata(data) {
  if(data === null){
    console.log("la data no carga");
    
  }else{
    console.log(data);
  }
}

const UsrProfiles = ({data}) => {
  const [load, setLoad] = useState(false); 
  const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`
  var userName = "" 

  var nname = "" 
  var lastName = "" 
  verydata(data);
 
  return (
  <div className='usr_profiles_container'>
    {load && <Loader></Loader>}
      <section class="perfil-usuario">
        <div class="contenedor-perfil">
          <div class="portada-perfil">
            <div class="sombra"></div>
            <div class="avatar-perfil">
              <img src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="img"></img>
                <a href="./Menu" class="cambiar-foto">
                  <i class="fas fa-camera"></i>
                  <span>Cambiar foto</span>
                </a>
            </div>
            <div class="datos-perfil">
              <h4 class="titulo-usuario"> {userName}</h4>
              <h4 class="titulo-username">{nname} {lastName}</h4>
              <p class="bio-usuario">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <ul class="lista-perfil">
                <li>35 Seguidores</li>
                <li>7 Seguidos</li>
                <li>32 Publicaciones</li>
              </ul>
            </div>
            <div class="opcciones-perfil">
              <button type="">Cambiar portada</button>
              <button type=""><i class="fas fa-wrench"></i></button>
            </div>
          </div>
          <div class="menu-perfil">
            <ul>
              <li><a href="#menu" title=""><i class="icono-perfil fas fa-bullhorn"></i> Publicaciones</a></li>
              <li><a href="#info" title=""><i class="icono-perfil fas fa-info-circle"></i> Informacion</a></li>
              <li><a href="#friend" title=""><i class="icono-perfil fas fa-grin"></i> Amigos 43</a></li>
              <li><a href="#fotos" title=""><i class="icono-perfil fas fa-camera"></i> Fotos</a></li>
            </ul>
          </div>
          <div class="more_info_perfil">
            <More></More>
          </div>
        </div>
      </section>
     
     
</div>
      )
}

      export default UsrProfiles