import React, {useState, useEffect, Component}from 'react'
import Loader from '../Loader/Loader';
import { MdContactPhone } from 'react-icons/md';
import { HiOutlinePhotograph } from 'react-icons/hi';
import {GiCommercialAirplane} from "react-icons/gi"
import {FaHouseUser} from "react-icons/fa"
import log from "../../../assets/img/CEIBA.png"
import "./UsrProfile.css"
import axios from 'axios';
import Misarriendos from './More/Arriendos/Misarriendos';
import Mispublicasiones from './More/Publicasiones/Mispublicasiones';
import Misviajes from './More/Viajes/Misviajes';
import Title from '../Title/Title';


const UsrProfiles = () => {
  const [load, setLoad] = useState(true);
  const [noload, setnoload] = useState(false);
  
  // Hooks control de botones de perfil
  const [Publicasion, setPublicasion] = useState({MisPublicasiones : true});
  const [Arriendos, setArriendos] = useState({MisArriendos : false});
  const [Viajes, setViajes ] = useState({MisViajes: false});

 

  const data_parsed = undefined;
  var [n_pub, setn_pub] = useState(0);
  const [db, setdb] = useState([]); 
  const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`


  function veryfy(estado){

    if(estado === "publica"){
      if(!Publicasion.MisPublicasiones){
        setArriendos({MisArriendos:false});
        setViajes({MisViajes :false});
        setPublicasion({MisPublicasiones:true});
      }
    }

   if( estado === "arriendo" ){
     if(!Arriendos.MisArriendos){
       setPublicasion({MisPublicasiones:false});
       setViajes({MisViajes :false});
       setArriendos({MisArriendos :true});
     }
   }

   if( estado === "viajes" ){
    if(!Viajes.MisViajes){
      setPublicasion({MisPublicasiones:false});
      setViajes({MisViajes :true});
      setArriendos({MisArriendos :false});
    }
  }
  }


  useEffect(()=>{
    axios
    .get(urldb)
    .then(res =>{
      console.log(res);
      setLoad(false);
      setnoload(true);
      localStorage.setItem("name_usr", res.data.userName);
      setn_pub(res.data.person.houses.length);
    })
    .catch(err => console.log(err))

   
  },[]);


  return (
    
  <div className='usr_profiles_container'>
    { load && (<Loader></Loader>)
    }
    {
      noload && (
      <section className="perfil-usuario">
        <div className="contenedor-perfil">
          <div className="portada-perfil">
            <div className="sombra"></div>
            <div className="avatar-perfil">
              <img src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="img"></img>
                <a href="#info" className="cambiar-foto">
                  <i className="fas fa-camera"></i>
                  <span>Cambiar foto</span>
                </a>
            </div>
            <div className="datos-perfil">
              <h4 className="titulo-usuario">{localStorage.getItem("name_usr")}</h4>
              <h4 className="titulo-username">{ localStorage.getItem("username")} {localStorage.getItem("lastName")}</h4>
              <ul className="lista-perfil">
                <li><MdContactPhone style={{fontSize:"20px"}}/> {db.phone} </li>
                <li>{n_pub} Publicaciones</li>
              </ul>
            </div>
            <div className="opcciones-perfil">
              <button type="">Cambiar portada</button>
              <button type=""><i className="fas fa-wrench"></i></button>
            </div>
          </div>
          <div className="menu-perfil" style={{display:"block !important"}} >
            <ul>
              <li  onClick={() => veryfy("publica")} style={{display:"block", marginRight:"30px"}} >
                <a href="#publicaciones" title="" style={{ marginLeft: "-28px"}}>
                  <i className="icono-perfil fas fa-bullhorn">
                    </i> Publicaciones
                    
                    <img  style={{width: "24px", marginTop:"2px",position:"absolute", marginLeft:"8px"}} src={log} ></img>
                  </a>
              </li>
              <li onClick={() => veryfy("arriendo")}>
                <a href="#ariendos" title="" style={{width:"165px", marginRight:"-20px"}} >
                  <i className="icono-perfil fas fa-info-circle">
                  </i> Mis Arriendos
                  <FaHouseUser style={{marginLeft:"8px"}}></FaHouseUser>
                </a>
              </li>
              <li  onClick={() => veryfy("viajes")}>
                <a href="#viajes" title="" style={{width:"140px", marginRight:"-24px", marginLeft:"-17px"}}>
                  <i className="icono-perfil fas fa-grin">
                  </i> Mis Viajes
                  <GiCommercialAirplane style={{marginLeft:"8px"}}></GiCommercialAirplane>
                </a>
              </li>
              <li>
                <a href="#fotos" title="" style={{width:"140px", marginRight:"-36px" , marginLeft:"-19px"}}>
                  <i className="icono-perfil fas fa-camera">
                  </i> Fotos
                  <HiOutlinePhotograph style={{marginLeft:"8px"}} ></HiOutlinePhotograph>
                </a>
              </li>
            </ul>
          </div>
          <div className="more_info_perfil">
            {
              Publicasion.MisPublicasiones &&  <>
              
              { db &&<>  <Title title={"Mis publicasiones"} ></Title> <Mispublicasiones setdat={setdb} />
             </>
              }
              </>
              
            }
            {
              Arriendos.MisArriendos && <>
               
              { db && <> <Title title={"Mis Arriendos"} ></Title> <Misarriendos setdat={setdb} /></>
              }
              
              </>
            }

            {
              Viajes.MisViajes && <> <Title title={"Mis Viajes"} ></Title><Misviajes setdat={setdb}></Misviajes></>
            }
            
          </div>
        </div>
      </section>
     
      )}
</div>
      )
}

      export default UsrProfiles