import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import home from "../../assets/icons/home.png";
import about from "../../assets/icons/about.png";
import predict from "../../assets/icons/predict.png";
import howToUse from "../../assets/icons/instruction.png";
import github from "../../assets/icons/github.png";
import contact from "../../assets/icons/contact.png";
import cosyslab from "../../assets/icons/cosyslab.png";
import logo from "../../assets/icons/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        <img src={logo} alt="Site-Logo" className='custom-logo' />
        <Link className="navbar-brand" to="/">NeuralTox</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center menu" id="navbarNav">
          <ul className="navbar-nav custom-nav-icons">
          <img src={home} alt="Home-Image"  className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <img src={about} alt="About-Image" className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <img src={predict} alt="Predict-Image" className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/predict">Predict</Link>
            </li>
            <img src={howToUse} alt="HowToUse-Image" className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/how-to-use">How to Use</Link>
            </li>
            <img src={github} alt="Github-Image" className='custom-image'/>
            <li className="nav-item">
              <a className='nav-link' href="https://github.com/ANGADJEET/NeuralTox">NeuralTox.py</a>
            </li>
            <img src={contact} alt="Contact-Image" className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            <img src={cosyslab} alt="CoSysLab-Image" className='custom-image'/>
            <li className="nav-item">
              <Link className="nav-link" to="/cosyslab">CoSysLab</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
