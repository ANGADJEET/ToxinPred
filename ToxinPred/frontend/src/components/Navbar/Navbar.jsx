import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import home from "../../assets/icons/home.png";
import predict from "../../assets/icons/predict.png";
import howToUse from "../../assets/icons/instruction.png";
import github from "../../assets/icons/github.png";
import contact from "../../assets/icons/contact.png";
import cosyslab from "../../assets/icons/cosyslab.png";
import logo2 from "../../assets/icons/logo.png";
import toxindb from "../../assets/icons/db.png";
import faq from "../../assets/icons/faq.png"; // Added missing import

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        <img src={logo2} alt="Site Logo" className="custom-logo" />
        <Link className="navbar-brand" to="/">
          ToxinPred
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center menu"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={home} alt="Home Icon" className="custom-image" />
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <img src={predict} alt="Predict Icon" className="custom-image" />
              <Link className="nav-link" to="/predict">
                Predict
              </Link>
            </li>
            <li className="nav-item">
              <img src={toxindb} alt="Toxin Database Icon" className="custom-image" />
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <img src={howToUse} alt="How to Use Icon" className="custom-image" />
              <Link className="nav-link" to="/how-to-use">
                How to Use
              </Link>
            </li>
            <li className="nav-item">
              <img src={github} alt="GitHub Icon" className="custom-image" />
              <a
                className="nav-link"
                href="https://github.com/ANGADJEET/ToxinPred"
                target="_blank"
                rel="noopener noreferrer"
              >
                ToxinPred.py
              </a>
            </li>
            <li className="nav-item">
              <img src={faq} alt="FAQ Icon" className="custom-image" />
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <img src={contact} alt="Contact Us Icon" className="custom-image" />
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <img src={cosyslab} alt="CoSysLab Icon" className="custom-image" />
              <Link className="nav-link" to="/cosyslab">
                CoSysLab
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
