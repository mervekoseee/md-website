import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import homepic from '../img/home.png';
import content2 from '../img/content2.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={homepic} alt="ProfilePic" ></img>
            <ReactTypingEffect className="typingeffect" text={['Welcome to MD Nanny & Childminder Services']} speed={100} eraseDelay={700}/>
            <Social />
            <br></br>
            <img src={content2} alt="ProfilePic" ></img>
            </div>
            )
        }
    }
    
    export default Home
    