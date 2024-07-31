import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import iiitd from "../../assets/icons/iiitd.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
const Footer = () => {
  return (
    <footer className="Contact">
        <div className="primary-footer mt-0">
          <div className="copyright-wrap">
            <div className="panel">
              <div className="content text-center">
                <p>
                  <img alt="IIITD Logo" src={iiitd} />
                </p>
                <p>
                  Copyright &copy; 2022 &nbsp; All rights reserved.
                  <br />
                  <br />
                  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
                    <img
                      alt="Creative Commons License"
                      style={{ borderWidth: 0 }}
                      src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
                    />
                  </a>
                  <br />
                  This work is licensed under a{' '}
                  <a style={{ fontWeight: 'bold' }} rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
                    Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
                  </a>.
                </p>
                <p>
                  <a href="https://iiitd.ac.in/" target="_blank" rel="noopener noreferrer">
                    <strong>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)</strong>
                  </a>{' '}
                  |{' '}
                  <a href="https://cosylab.iiitd.edu.in/" target="_blank" rel="noopener noreferrer">
                    Prof. Ganesh Bagler
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://www.facebook.com/ganesh.bagler" rel="noopener noreferrer">
                    <img src= {facebook}alt="Facebook" className='custom-footer-image' />
                  </a>
                  <a target="_blank" href="https://twitter.com/gansbags" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" className='custom-footer-image' />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/ganeshbagler" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className='custom-footer-image'/>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
