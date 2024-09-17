import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ContactUs.css'; // Import the CSS file
import Footer from '../Footer/Footer';
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="fluid-container">
        <div className="container pr-0 pl-0 pt-5 pb-4">
          <div className="container pt-2">
            <div className="jumbotron text-center mb-3 shadow-sm mt-2">
              <div className="tab-content" id="myTabContent">
                <div className="row mt-2">
                  <div className="col-md-5 text-left">
                    <h5 className="pt-2 pb-2">Contact Us</h5>
                    <p>
                      Dr. Ganesh Bagler<br />
                      <a href="http://ccb.iiitd.ac.in/">Center for Computational Biology</a><br />
                      Indraprastha Institute of Information Technology Delhi (IIIT Delhi),<br />
                      R&D Building ,<br />
                      Okhla Phase III, Near Govindpuri Metro Station,<br />
                      New Delhi, India 110020.<br />
                      <b>Email: </b><a href="mailto:bagler+BitterSweet@iiitd.ac.in">bagler+BitterSweet@iiitd.ac.in</a><br />
                      <b>Tel:</b> +91-11-26907-443 (Work)
                    </p>
                  </div>
                  <div className="col-md-7">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHazaZOXjDDkRVsV7DjQuWCw&key=AIzaSyBRBQG98E5YdUoooyAk2wd-_olpWmL5ACE"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default ContactUs;
