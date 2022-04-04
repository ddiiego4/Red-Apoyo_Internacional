import React from 'react'
import Title from '../Title/Title';

const Profilers = ({profile_Data}) => {
    console.log("DAtataaaa");
    console.log(profile_Data);
    return (
    
    <div className='Profiles_container'>Profilers

        <Title title={profile_Data.nombre} />
        <div className='zona_comentarios'>Comentarios</div>
        <div className='zona_fotos'>Fotos</div>
        <div className='zona_reserva'>Fecha_reserva</div>
        <div className='zona_descripcion'>Descripcion</div>
        <div className='zona_costo'> {profile_Data.costo}</div>
        <div className='zona_otros'>Otros</div>

    </div>
  )
}

export default Profilers