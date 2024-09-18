import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ContactUs.css';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="contact-title">Contact Us</h5>
                  <div className="row mt-4">
                    <div className="col-md-6 text-left contact-info">
                      <p>
                        <strong>Dr. Ganesh Bagler</strong><br />
                        <a href="http://ccb.iiitd.ac.in/" className="link">Center for Computational Biology</a><br />
                        Indraprastha Institute of Information Technology Delhi (IIIT Delhi),<br />
                        R&D Building,<br />
                        Okhla Phase III, Near Govindpuri Metro Station,<br />
                        New Delhi, India 110020.<br />
                        <b>Email:</b> <a href="mailto:cosylab.iiitd@gmail.com">cosylab.iiitd@gmail.com</a><br />
                        <b>Tel:</b> +91-11-26907-443 (Work)
                      </p>
                    </div>
                    <div className="col-md-6">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHazaZOXjDDkRVsV7DjQuWCw&key=AIzaSyBRBQG98E5YdUoooyAk2wd-_olpWmL5ACE"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Location Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
