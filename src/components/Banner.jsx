import React, { useState } from 'react';
import Header from './header'; 
import img4 from '../image/img port4.jpg';
import '../App.css'; 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Banner() {

  return (
    <>
      <Header/>
      <div className='banner'>
        <div className="text">
          <p>Hi, I'm Arjun.k</p>
          <div className="txt1">
          <p>Full-Stack Developer</p>
          </div>
          <div className='txt2'>
            Dedicated technology enthusiast with an insatiable curiosity for<br></br>
            unravelling the complexities of our digital word
          </div>
          <br></br>
          <div>
            <button className="btn">Projects</button>
            <button className="btn">About me</button>
            <button className="btn">Contact me</button>
          </div>
        
         
          
        </div>
        <div className="txt3">
            Follow on __<FaGithub className='git'/> <FaLinkedin className='git' />
          </div>
       
        <div className="img">
          <img src={img4} alt="Banner Image" />
        </div>
        </div>
    </>
  );
}


export default Banner;
