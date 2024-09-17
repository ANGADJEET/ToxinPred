import React from "react";
import Navbar from "../Navbar/Navbar"; // Importing the Navbar component
import "./FAQ.css"; // Importing the custom CSS for FAQ styling

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4"> {/* Main container with margin-top */}
        <div className="custom-card card"> {/* Custom card with box shadow */}
          <div className="card-header">FAQ</div> {/* FAQ header */}
          <div className="card-body">
            <p className="card-text">
              Frequently Asked Questions about NeuralTox.
            </p>
            <ul>
              <li>
                <strong>What is the research goal?</strong>
                <br />
                To develop computational models for predicting molecular toxicity.
              </li>
              <li>
                <strong>How many molecules are in the dataset?</strong>
                <br />
                14,134 molecules (7,550 toxic, 6,514 non-toxic).
              </li>
              <li>
                <strong>What feature extraction methods were used?</strong>
                <br />
                RDKit and PaDELPy libraries, generating 20,401 features.
              </li>
            </ul>
          </div>
        </div>

        {/* You can add more FAQ sections similarly */}
        <div className="custom-card card mt-4"> {/* Custom card for a new section */}
          <div className="card-header">More Info</div>
          <div className="card-body">
            <p className="card-text">
              Additional questions and details about the project.
            </p>
            <ul>
              <li>
                <strong>What algorithms were applied?</strong>
                <br />
                Random Forest, XGBoost, and Support Vector Machine (SVM) were used for toxicity prediction.
              </li>
              <li>
                <strong>How was data preprocessed?</strong>
                <br />
                Data balancing was done using SMOTE, and feature extraction was done using RDKit and PaDELPy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
