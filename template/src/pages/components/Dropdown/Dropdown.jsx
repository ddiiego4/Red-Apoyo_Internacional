import React from 'react';
import './Dropdown.css';

import { cerrarSesion } from '../../helpers/cerrarSesion';
import { alerta } from '../../helpers/alerta';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <ul className="dropdown-menu">
               
                    <div>
                        <div>
                            <button className="btn" type="button" onClick={cerrarSesion}>Cerrar Sesión</button>
                        </div>
                        <i>X</i>
                    </div>
               
                    <div>
                        <div>
                            <button className="btn" type="button" onClick={alerta}>Alerta</button>
                        </div>
                        <i>X</i>
                    </div>
                

            </ul>

        </div>
    )
}

export default Dropdown