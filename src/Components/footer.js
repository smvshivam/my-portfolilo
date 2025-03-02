import { Link } from "react-router-dom";
import img from "../assets/img/mypicture.jpg";
const FooterSection=()=>{
    return(
        <footer className="widt my-5 container">
            <div className="d-flex justify-content-center align-items-center ">
                <img src={img} className="img-logo"/>
                <h2 className="mx-3 footer-name">Shivam Gupta</h2>
            </div>
            
                <ul className="nav nav-s justify-content-center">
                    <li className="nav-item"><Link to="/about" className="footer-link nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/skills" className="footer-link nav-link">Skills</Link></li>
                    <li className="nav-item"><Link to="#" className="footer-link nav-link">Resume</Link></li>
                    <li className="nav-item"><Link to="/contact" className="footer-link nav-link">Contact Us</Link></li>
                </ul>

                <div className="text-center mt-2">
                <Link to="https://www.linkedin.com/in/smv-shivam-dev" target="blank"><i class="fab fa-linkedin fs-4 icon-color"></i></Link>
                <Link to="https://github.com/smvshivam" target="blank"><i class="fab fa-github fs-4 mx-4 icon-color"></i></Link>
                <Link to="https://www.instagram.com/__shivam___03" target="blank"><i class="fab fa-instagram fs-4 icon-color"></i></Link>
                </div>
                <p className="text-center mt-1 copyrights">&copy; 2025 <span className="me">SMV_Shivam</span>. All Rights Reserved.</p>
        </footer>
    )
}

export default FooterSection;