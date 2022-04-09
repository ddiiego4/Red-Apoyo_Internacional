import React, { Component} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Profile.css"

import Profilers from "./Profilers";
import Headerns from "../Header/Headerns";
import Footer from "../Footer/Footer";

const cookies = new Cookies();

//HAy que reparar el Menu
function manage_states(params) {
  console.log(params)  
}


export default class Profile extends Component {
  state = {
    Profiles: [],
  };

  componentDidMount() {
    const path = window.location.pathname;
    const text_splite = path.split("/");
    console.log(text_splite[2]);
    const DbUrl = `http://localhost:3003/houses/${text_splite[2]}`
   // const DbUrl2 = `https://isnft-prod.azurewebsites.net/api/houses/${text_splite[2]}`
    axios
      .get(DbUrl)
      .then((res) => {
        this.setState({ Profiles: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="container_menu">
          <div>
            <Headerns
              //manage_states={manage_states}
              username={localStorage.getItem("name_usr")}
            />
          </div>
          <br />
          <br />
          <div>
            <div className="Sections">
              <Profilers profile_Data={this.state.Profiles} />
            </div>
          </div>
          <div></div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
