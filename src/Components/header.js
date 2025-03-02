import { Link } from "react-router-dom";
import img from "../assets/img/mypicture.jpg";

const Header = ()=>{
    return(
        <nav className="container w-75 mt-4  nav-bg">
            <div className="row">
               <Link to="/" className="col align-content-center text-decoration-none">
               <img src={img} alt="logo" className="logo-img rounded-circle"/>
               <span className="mx-3 fs-5 fw-bold logo-color">SMV_Shivam</span>
               </Link>
               <ul className="col nav justify-content-end align-content-center">
                <li className="nav-item"><Link to="/" className="nav-link nav-ling-color">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link nav-ling-color">About</Link></li>
                <li className="nav-item"><Link to="/resume" className="nav-link nav-ling-color">Resume</Link></li>
                <li className="nav-item"><Link to="/skills" className="nav-link nav-ling-color">Skills</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link nav-ling-color">Contact Me</Link></li>
               </ul>
            </div>
        </nav>
    )
}

export default Header;