import React, { Component} from 'react'
import Cookies from 'universal-cookie'
import "./UsrProfile.css"
import UsrProfiles from './UsrProfiles'
import Headerns from '../Header/Headerns'
import Footer from '../Footer/Footer'
import axios from 'axios'
const cookies = new Cookies()
const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`


class UsrProfile extends Component {
    state = {
        dtusr: null,
      };
    
      async useEffect() {
       await axios
          .get(urldb)
          .then((res) => {
            this.setState({ dtusr: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
     

    render() {

        return (

            <div className='container_menu'>
                <div>
                    <Headerns
                        //manage_states={manage_states} 
                        username={localStorage.getItem("name_usr")} />
                </div>
                <br />
                <br />
                <div>
                    <div className='Sections'>
                        <div className='container_profile_usr'>
                            <UsrProfiles data={this.state.dtusr}/>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>


        )
    }
}
export default UsrProfile;