import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './HowToUse.css'; // Add a CSS file for custom styles
import Footer from "../Footer/Footer";
const HowToUse = () => {
  const [activeSection, setActiveSection] = useState("section1");

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav className="col-md-3 col-lg-2 bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="list-group">
                <li
                  className={`list-group-item ${activeSection === "section1" ? "active" : ""}`}
                  onClick={() => setActiveSection("section1")}
                >
                  Predict
                </li>
                <li
                  className={`list-group-item ${activeSection === "section2" ? "active" : ""}`}
                  onClick={() => setActiveSection("section2")}
                >
                  Results
                </li>
                {/* <li
                  className={`list-group-item ${activeSection === "section3" ? "active" : ""}`}
                  onClick={() => setActiveSection("section3")}
                >
                  Option 3
                </li>
                <li
                  className={`list-group-item ${activeSection === "section4" ? "active" : ""}`}
                  onClick={() => setActiveSection("section4")}
                >
                  Option 4
                </li>
                <li
                  className={`list-group-item ${activeSection === "section5" ? "active" : ""}`}
                  onClick={() => setActiveSection("section5")}
                >
                  Option 5
                </li> */}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="col-md-9 ml-sm-auto col-lg-10 content-area">
            {activeSection === "section1" && (
              <div className="Prediction">
                <h2>Predict</h2>

                {/* First Image and Text Block in a Box */}
                <div className="box my-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="src\assets\backgrounds\Predict1.jpg" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-6">
                      <p>
                        Simply provide a single SMILES string, and the system will predict whether the molecule is toxic or not.
                      </p>

                    </div>
                  </div>
                </div>

                {/* Second Image and Text Block in a Box */}
                <div className="box my-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="src\assets\backgrounds\Predict2.jpg" alt="Second prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-6">
                      <h3>Predicting Molecular Toxicity</h3>

                      <p>
                        <strong>1. Prepare Your Data:</strong><br />
                        Ensure your CSV file contains the necessary molecular descriptors or chemical properties required for toxicity prediction. Each row should represent a different molecule, and each column should correspond to a specific feature or descriptor.
                      </p>

                      <p>
                        <strong>2. Upload the CSV File:</strong><br />
                        Use the interface provided to upload your CSV file. The system accepts standard CSV formats, where the first row typically contains the header with feature names.
                      </p>

                      <p>
                        <strong>3. Viewing the Results:</strong><br />
                        After the prediction is complete, the results are displayed in a user-friendly format. You can view the predicted toxicity levels for each molecule, and if needed, download the results as a new CSV file for further analysis.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "section2" && (
              <div>
                <div className="Result">
                <h2>Results</h2>

                {/* First Image and Text Block in a Box */}
                <div className="box my-4">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="src\assets\backgrounds\Result.jpg" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-6">
                      <p>
                        After processing the molecule or the file, the result is shown at the bottom of the page.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}
            {/* {activeSection === "section3" && (
              <div>
                <h2>Option 3 Content</h2>
                <p>This is the content for Option 3.</p>
              </div>
            )}
            {activeSection === "section4" && (
              <div>
                <h2>Option 4 Content</h2>
                <p>This is the content for Option 4.</p>
              </div>
            )}
            {activeSection === "section5" && (
              <div>
                <h2>Option 5 Content</h2>
                <p>This is the content for Option 5.</p>
              </div>
            )} */}
          </main>
        </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default HowToUse;
