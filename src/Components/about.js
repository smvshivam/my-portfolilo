import { useState } from "react";
import img from "../assets/img/mypicture.jpg";

const About = ()=>{
    
    return(
        <div className="widt my-5  container text-center">
            <h1 className="my-4 about">About <span className="me">Me</span></h1>
            <div className="d-flex flex-column align-items-center">
                <img src={img} className="d-none d-md-block about-img rounded-circle"/>
                <div className="d-none d-md-block my-3 about about1"><span className="me">Full-Stack </span><span className="dev">Developer!</span></div>
            </div>
            <p className="my-3 font-p">I am a passionate <span className="font-p me">Full Stack Developer </span>dedicated to crafting seamless and high-performance web applications. with a strong foundation in both <span className="font-p me">frontend </span>and <span className="font-p dev">backend</span> technologies, I specialize in building intuitive, scalable, and efficient digital experiences. My approach combines clean code, modern frameworks, and a problem-solving mindset to deliver innovative solutions.</p>
        </div>
    )
}

export default About;