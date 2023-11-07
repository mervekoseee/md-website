import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import success from "../img/content.png";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic" style={{ color: "#219ebc" }}>Keynotes For Success</h1>
            <ul>
                <li style={{ fontSize: "20px" }}>
                A career experience of over 10 years, developing all manner of business and professional skills
                </li>
                <li style={{ fontSize: "20px" }}>
                Professional experience and successfully completed skills 
                </li>
                <li style={{ fontSize: "20px" }}>
                Providing efficient services which are suited to each client's specific needs 
                </li>
                <li style={{ fontSize: "20px" }}>
                Being emphatic, positive and compassionate
                </li>
                <li style={{ fontSize: "20px" }}>
                Giving affordable services
                </li>
                <li style={{ fontSize: "20px" }}>
                Being available to contact over the phone or via email as much as possible 
                </li>
                <li style={{ fontSize: "20px" }}>
                To provide a high quality service that is suitable, flexible and can make real choices for thechanging demands of the customers.
                </li>
            </ul>
            <br></br>
            <img src={success} alt="about"  />
            </div>
            )
        }
    }
    
export default Education
    