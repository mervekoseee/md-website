import React, { Component } from 'react';
import aboutimg from "../img/aboutimg.png";
import aboutimg2 from "../img/aboutimg2.png";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic" style={{ color: "#219ebc" }}>About Me</h1>
                <h4>Hey there,</h4>
                <h3>I am Muge Dogan. Turkish Businessperson of <u style={{ color: "#f15bb5" }}>Nanny & Childminder Services</u>.</h3>
                <br></br>
                <h2 style={{ color: "#219ebc" }}>Personal Statement</h2>
                <p>
                    I have graduated from Vocational High School and got my diploma about Child Development.
                    <br></br>
                    I have graduated from Public Education Center and Art School then I got my Trainer Certificate from The Federation.
                    <br></br>
                    I had worked in various schools through Public Education Center and my own private agreements.
                    <br></br>
                    My duties are on the physical and mental development of children and their art acquisition by giving dance
                    education.
                    <br></br>
                    I had improved skills to managing human relations, strengthening communication techniques
                    and handling difficult issues.
                </p>
                <br></br>
                <h2 style={{ color: "#219ebc" }}>Work Experience</h2>
                <ul>
                    <li>2005 – Preschool classroom teaching – Aksaz Day Care Center (Turkey)</li>
                    <li>2011 – 2012 – Class and Dance Teacher – Turgut Reis Pre-school, Kepez Izmirlioglu Primary
                        School (Assignment Through Public Education İnstitution – Turkey)</li>
                    <li>2012 – 2013 – Class and Dance Teacher – Ihsan Yilmaz Primary School (Assignment Through
                        Public Education İnstitution – Turkey)</li>
                    <li>2012 – 2013 – Class and Dance Teacher – Gazi Primary School, Erdemir Primary School,
                        Kdz.Eregli Anatolian High School (Assignment Through Public Education İnstitution – Turkey)</li>
                    <li>2013 – 2014 – Class and Dance Teacher – Kdz.Eregli Private Utku College (Turkey)</li>
                    <li>2014 – 2015 – Class and Dance Teacher – Kdz.Eregli TED College (Turkey)</li>
                    <li>2015 – 2016 – Class and Dance Teacher – Gulsen Utku Pre-school (Turkey)</li>
                    <li>2016 – 2018 – Class and Dance Teacher – Kdz.Eregli Private Utku College (Turkey)</li>
                    <li>2018 – 2020 – Class and Dance Teacher – Cemile Tatoglu Pre-school, Kdz.Eregli Private Doga
                        College (Assignment Through Public Education İnstitution – Turkey)</li>

                </ul>
                <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
            <img src={aboutimg} alt="about"  />
            <br></br>
            <img src={aboutimg2} alt="about"  />
          </Col>
            </div>
        )
    }
}

export default About
