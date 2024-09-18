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
                  className={`list-group-item ${activeSection === "section3" ? "active" : ""}`}
                  onClick={() => setActiveSection("section3")}
                >
                  Search
                </li>
                {/*
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
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Predict1.png" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>
                        <h5>Single Prediction</h5>
                        <ul>
                          <li>Enter SMILES: In the "Single Prediction" section, type or paste the SMILES string of the molecule you want to analyze.</li>
                          <li>Submit: Click the "Submit" button to initiate the prediction process.</li>
                          <li>View Results: The prediction results will be displayed at the bottom of the page, indicating whether the molecule is predicted to be toxic or non-toxic.</li>

                      
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>


                {/* Second Image and Text Block in a Box */}
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Predict2.jpg" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>
                        <h5>Batch Prediction</h5>
                        <ul>
                          <li>Prepare CSV File: Create a CSV file with a column named 'SMILES'. In this column, enter the SMILES strings of the molecules you want to analyze. Ensure that the CSV file is in UTF-8 encoding. Also enter your mail.</li>
                          <li>Upload CSV: Click the "Choose File" button to select the prepared CSV file.</li>
                          <li>Submit: Click the "Submit" button to start the batch prediction.</li>
                          <li>View Results: The results will be sent to your mail . It might take some time depending the number of molecules in the csv file.</li>
                          </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Predict3.jpg" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>

                        <h5>Drawing Prediction</h5>
                        <ul>
                          <li>Draw Molecule: Use the drawing tool to sketch the molecule's structure.</li>
                          <li>Submit: Click the "Submit" button to initiate the prediction.</li>
                          <li>View Results: The prediction results will be displayed in a table at the bottom of the page, indicating whether the molecule is predicted to be toxic or non-toxic.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Predict4.jpg" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>

                        <h5>MiniBatch Prediction</h5>
                        <ul>
                          <li>Enter SMILES or Upload CSV: Provide the SMILES strings or upload a CSV file as in the Single Prediction or Batch Prediction sections.</li>
                          <li>Specify Batch Size: Set the desired batch size for processing the molecules.</li>
                          <li>Submit: Click the "Submit" button to start the mini-batch prediction.</li>
                          <li>View Results: The results will be displayed in a table, with each row representing the toxicity of the molecule.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "section3" && (
              <div>
                <div className="Result">
                  <h2>Search</h2>
                  "The input is the same as for the predict function. Please refer to the 'how to use predict' section to understand how the inputs for each function should be structured.
                  {/* First Image and Text Block in a Box */}
                  <div className="custom-card card mt-4">
                    <div className="card-body d-flex align-items-center">
                      <div className="me-3">
                        <img src="src/assets/backgrounds/Search1.png" alt="First prediction step" className="img-fluid img-thumbnail" />
                      </div>
                      <div>
                        <h5>Single Prediction</h5>
                        <ul>
                          <li>Enter SMILES: In the "Single Prediction" section, type or paste the SMILES string of the molecule you want to analyze.</li>
                          <li>Submit: Click the "Submit" button to initiate the prediction process.</li>
                          <li>View Results: The results will be displayed in a table, showing various properties of the molecule, such as aromatic rings, hydrogen bond acceptors/donors, logP, molecular formula, molecular weight, rotatable bonds, and topological polar surface area.</li>
                          <li>Visualize Molecule: The predicted molecule image will also be shown, providing a visual representation of the structure.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* First Image and Text Block in a Box */}
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Search2.png" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>
                        <h5>Batch Prediction</h5>
                        <ul>
                          <li>Prepare CSV File: Create a CSV file with a column named 'SMILES'. In this column, enter the SMILES strings of the molecules you want to analyze. Ensure that the CSV file is in UTF-8 encoding.</li>
                          <li>Upload CSV: Click the "Choose File" button to select the prepared CSV file.</li>
                          <li>Submit: Click the "Submit" button to start the batch prediction.</li>
                          <li>View Results: The results will be displayed in a small pages, with each page representing a molecule and its corresponding properties.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Search3.png" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>
                        <h5>Drawing Prediction</h5>
                        <ul>
                          <li>Draw Molecule: Use the drawing tool to sketch the molecule's structure.</li>
                          <li>Submit: Click the "Submit" button to initiate the prediction.</li>
                          <li>View Results: The results will be displayed in a table, similar to the Single Prediction.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-card card mt-4">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <img src="src/assets/backgrounds/Search4.png" alt="First prediction step" className="img-fluid img-thumbnail" />
                    </div>
                    <div>
                      <p>
                        <h5>MiniBatch Prediction</h5>
                        <ul>
                          <li>Enter SMILES or Upload CSV: Provide the SMILES strings or upload a CSV file as in the Single Prediction or Batch Prediction sections.</li>
                          <li>Specify Batch Size: Set the desired batch size for processing the molecules.</li>
                          <li>Submit: Click the "Submit" button to start the mini-batch prediction.</li>
                          <li>View Results: The results will be displayed in a small page, with each page representing a molecule and its predicted properties.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            )}

            {/* {activeSection === "section5" && (
              <div>
                <h2>Option 5 Content</h2>
                <p>This is the content for Option 5.</p>
              </div>
            )} */}
          </main>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default HowToUse;
