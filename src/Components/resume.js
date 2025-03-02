import resume from "../assets/resume.pdf"
import resumepicture from "../assets/img/resume photo.jpg"
import { Link } from "react-router-dom";

const ResumeSection = ()=>{
    return(
        <section className="w-50 my-5 container">
            <h1 className="m-3 text-center my-resume">My <span className="me">Resume</span></h1>
            
            <img src={resumepicture} type="application/pdf" className="w-100 rounded-3 resume"/>
            <a href={resume} download className="my-4 offset-4 rounded-3 btn download">Download Resume</a>
            
            <p className="main-paragraph-font">I am eager to collaborate on exciting projects, work with <span className="me">innovative teams</span>, and contribute to <span className="dev">impactful solutions</span> in the tech industry.</p>

            <Link to="/contact" className=""><button className="main-btn-font btn-color-2 rounded-3">Let's Connect</button></Link>
        </section>
    )
}

export default ResumeSection;