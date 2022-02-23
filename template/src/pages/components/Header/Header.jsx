import React, { useEffect }from 'react'
import $ from 'jquery'
import './Header.css';

const Header = () => {

   
    return (
        <>
        <header className="header_col" id="header_color">
                <div className="logo_navbar">
                </div>

                <div>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
                    </form>
                </div>



                <div class="nav_principal">
                    <nav className="sections">
                        <ul>
                            <li>
                                <a className="aref" href="./home">Inicio</a>
                            </li>

                            <li>
                                <div className="usr_btn_menu" href="./home"></div>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header></>
    )
}

export default Header