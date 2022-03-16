import axios from "axios";
import React, { Component , useState , useEffect} from "react";
import Houses from "./Houses/Houses";
import './Hous.css'

const DbUrl="http://localhost:3002/Houses";


export default class Hous extends Component {

    
    state = {
        Houses: []
    }

    componentDidMount(){
        axios.get(DbUrl).then(res =>{
            this.setState({Houses : res.data});
        });
    }

    
    render(){
        
        return(
            <>
                <div className="Houses_Container">
                    <div className="Houses"> 
                        
                        <div>
                        <Houses houses={this.state.Houses}/>
                           
                        </div>
                        <br />
                        <br />
                        
                        <p>
                            Houses 
                        </p>
                    </div>
                </div>
            </>

        );
    }

} 