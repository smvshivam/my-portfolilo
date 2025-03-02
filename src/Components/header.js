import { Link } from "react-router-dom";
import img from "../assets/img/mypicture.jpg";
import { useState } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleNav = () => {
    if (isClicked == true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
    <>
      <nav className="container widt mt-4  nav-bg">
        <div className="row">
          <Link
            to="/"
            className="col col-sm-10 col-md-2 col-lg-4 align-content-center text-decoration-none"
          >
            <img src={img} alt="logo" className="logo-img rounded-circle" />
            <span className="mx-3 d-md-none d-lg-inline-block fs-5 fw-bold logo-color">
              SMV_Shivam
            </span>
          </Link>
          <ul className="col col-md-10 col-lg-8 d-none d-md-flex nav justify-content-end align-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-ling-color">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-ling-color">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link nav-ling-color">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link nav-ling-color">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-ling-color">
                Contact Me
              </Link>
            </li>
          </ul>

          {isClicked ? (
            <i
              class="fa-solid fa-xmark col-2 text-end align-content-center fs-3 d-md-none me"
              onClick={() => handleNav()}
            ></i>
          ) : (
            <i
              class="fa-solid fa-bars col-2 text-end align-content-center fs-3 d-md-none dev"
              onClick={() => handleNav()}
            />
          )}
        </div>
      </nav>
      {isClicked && (
        <ul className="px-3 d-md-none nav flex-column align-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link nav-ling-color">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-ling-color">
              <i class="fa-solid fa-address-card"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link nav-ling-color">
              <i class="fa-solid fa-file"></i> Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link nav-ling-color">
              <i class="fas fa-id-badge"></i> Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-ling-color">
              <i class="fa-solid fa-paper-plane"></i> Contact Me
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
