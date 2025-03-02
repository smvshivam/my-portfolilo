import { Link } from "react-router-dom";

import img from "../assets/img/mypicture.jpg"
const Main = ()=>{
    return(
        <main className="widt w-md-100 container ">
           <div className="row ">
            <section className="col-md mt-sm-5">
                <h1 className="mt-5 main-heading-font">Hi, I'm Shivam Gupta</h1>
                <span className="span-color1">Full-Stack  </span> <span className="span-color2"> Developer</span>
                <p className="my-4 main-paragraph-font">
                    I design and develop dynamic, scalable web applications with a strong focus on both <span className="front-color fw-bolder">frontend</span> and <span className="back-color fw-bolder">backend</span> technologies. Passionate about clean code, performance, and user experience, I thrive on building efficient solutions that create a meaningful impact.
                </p>

            
                <Link to="/resume"><button className="btn btn-lg btn-color-1 rounded-2 main-btn-font">Hire me</button></Link>
                <Link to="https://wa.me/8210671205" target="blank"><button className="btn btn-lg btn-color-2 mx-4 main-btn-font">Let's Talk</button></Link>

               
            </section>

            <section className="col-md align-content-center text-center ">
                <img src={img} alt="author" className="w-75 h-75 rounded-4 img-shadow"/>
                <div className="position-relative icon-direction">
                <Link to="https://www.linkedin.com/in/smv-shivam-dev" target="blank"><i class="fab fa-linkedin fs-4 icon-color"></i></Link>
                <Link to="https://github.com/smvshivam" target="blank"><i class="fab fa-github fs-4 mx-4 icon-color"></i></Link>
                <Link to="https://www.instagram.com/__shivam___03" target="blank"><i class="fab fa-instagram fs-4 icon-color"></i></Link>
                </div>
            </section>
           </div>
        </main>
    )
}

export default Main;