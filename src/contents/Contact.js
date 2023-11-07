import React, { Component } from 'react';
import Social from '../components/Social';
import contact from "../img/content4.png";
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic" style={{ color: "#219ebc" }}>Contact Me</h1>
            <h3 ><u style={{ color: "#f15bb5" }}>Email  :</u>    mugerve@hotmail.com</h3>
            <h3><u style={{ color: "#f15bb5" }}>Instagram   :</u>   @mugerve</h3>
            <Social />
            <img src={contact} style={{width: "500px",
  margin:"30px", height: "auto"}}  />
            </div>
            )
        }
    }
    
    export default Contact
    