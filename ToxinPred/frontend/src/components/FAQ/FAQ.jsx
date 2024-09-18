import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"; // Importing the Navbar component
import "./FAQ.css"; // Importing the custom CSS for FAQ styling
import Footer from "../Footer/Footer";

const FAQ = () => {
  const [activeSection, setActiveSection] = useState("general"); // State for active section

  // Content for each FAQ section
  const renderSection = () => {
    switch (activeSection) {
      case "general":
        return (
          <div className="container mt-4">
            {/* General FAQs */}
            <div className="custom-card card mt-4">
              <div className="card-header">Q1: What are the various services provided by the ToxiPredictor web server?</div>
              <div className="card-body">
                <p className="card-text">
                  ToxiPredictor provides the following services:
                  <ul>
                    <li>Single molecule toxicity prediction by inputting a SMILES string.</li>
                    <li>Batch toxicity prediction by uploading a CSV file containing multiple SMILES strings.</li>
                    <li>Prediction interface for user interaction with the server.</li>
                    <li>Model workflow visualization on the landing page for an overview of prediction processes.</li>
                    <li>Molecular drawing feature with 2D representation for visual representation of molecular structures.</li>
                  </ul>
                </p>

              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: Which web browsers are supported by ToxiPredictor?</div>
              <div className="card-body">
                <p className="card-text">
                  ToxiPredictor has been tested to run successfully on the following systems:
                  <table className="table">
                    <thead>
                      <tr>
                        <th>OS</th>
                        <th>Version</th>
                        <th>Chrome</th>
                        <th>Firefox</th>
                        <th>Safari</th>
                        <th>Microsoft Edge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Linux</td>
                        <td>Ubuntu 16.04</td>
                        <td>71.0.3578.98</td>
                        <td>64.0</td>
                        <td>N/A</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td>MacOS</td>
                        <td>Mojave</td>
                        <td>71.0.3578.98</td>
                        <td>64.0</td>
                        <td>12.0.2</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td>Windows</td>
                        <td>10</td>
                        <td>71.0.3578.98</td>
                        <td>64.0</td>
                        <td>N/A</td>
                        <td>44.17763.1.0</td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Is the web server mobile friendly?</div>
              <div className="card-body">
                <p className="card-text">
                  Yes, the web server is mobile-friendly, as we've used Bootstrap for responsive design.
                </p>
              </div>

            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: What security measures are in place to protect user data?</div>
              <div className="card-body">
                <p className="card-text">
                ToxiPredictor employs various security measures including data encryption, secure connections (HTTPS), and regular security audits to protect user data and ensure privacy.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q5: How can I contact the support team?</div>
              <div className="card-body">
                <p className="card-text">
                  You can contact the support team via the contact form on our website, or by sending an email to cosylab.iiitd@gmail.com.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q6: Where can I find documentation and user guides?</div>
              <div className="card-body">
                <p className="card-text">
                  Documentation and user guides can be found in the <a href="/how-to-use" target="_blank">How to Use</a> section of our website.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q7: How often is the data updated?</div>
              <div className="card-body">
                <p className="card-text">
                  Data is updated regularly to ensure accuracy and relevance. Updates are typically made on a quarterly basis, though the frequency may vary based on new research, data availability, and system improvements.
                </p>
              </div>

            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q8: Are there any costs associated with using Toxipredictor?</div>
              <div className="card-body">
                <p className="card-text">
                  Toxipredictor offers both free and premium services. Basic features are available at no cost, while advanced features may require a subscription or payment.
                </p>
              </div>
            </div>

          </div>
        );
      case "predict":
        return (
          <div className="container mt-4">
            {/* Predict FAQs */}
            <div className="custom-card card mt-4">
              <div className="card-header">Q1: Which input formats are supported by Toxipredictor for generating predictions?</div>
              <div className="card-body">
                <p className="card-text">
                  Toxipredictor supports the following input formats for generating predictions:
                  <ul>
                    <li>SMILES strings</li>
                    <li>CSV files in the proper format. The CSV file must include a column named 'SMILES' containing the SMILES strings.</li>
                  </ul>
                </p>
              </div>

            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: How do I interpret the prediction output?</div>
              <div className="card-body">
                <p className="card-text">
                  For information regarding interpretation of prediction output, please visit the Results part<a href="/how-to-use" target="_blank" rel="noopener noreferrer">How to Use</a> page.
                </p>
              </div>
            </div>


            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Can I get predictions for multiple molecules at once?</div>
              <div className="card-body">
                <p className="card-text">
                  Yes, you can upload a batch of up to 100 molecules at a time for batch prediction.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: Are there any limitations on the number of predictions I can make?</div>
              <div className="card-body">
                <p className="card-text">
                  While there is no strict limit on the number of predictions, large-scale batch predictions may be subject to usage policies and performance considerations. If features for a SMILES string cannot be generated, the system will return an error indicating the issue with that specific input.
                </p>
              </div>
            </div>


            <div className="custom-card card mt-4">
              <div className="card-header">Q5: How accurate are the predictions made by Toxipredictor?</div>
              <div className="card-body">
                <p className="card-text">
                  The accuracy of predictions depends on the quality of the input data and the underlying models. toxipredictor uses state-of-the-art methods to provide reliable predictions.
                </p>
              </div>
            </div>

            


            <div className="custom-card card mt-4">
              <div className="card-header">Q6: What should I do if I encounter issues with predictions?</div>
              <div className="card-body">
                <p className="card-text">
                  If you encounter issues with predictions, please reach out to our support team via the contact form or email us with detailed information about the issue.
                </p>
              </div>
            </div>
          </div>
        );
      case "search":
        return (
          <div className="container mt-4">
            {/* Search FAQs */}
            <div className="custom-card card mt-4">
              <div className="card-header">Q1: What types of molecular structures can be predicted using the SMILES string?</div>
              <div className="card-body">
                <p className="card-text">
                  The server can predict various molecular structures based on a given SMILES string in 2D molecular structure diagrams.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: How are the physicochemical properties of a molecule determined from its SMILES string?</div>
              <div className="card-body">
                <p className="card-text">
                  Physicochemical properties such as  aromatic rings, hydrogen bond acceptors/donors, logP, molecular formula, molecular weight, rotatable bonds, and topological polar surface area are determined using algorithms that interpret the SMILES string and apply relevant chemical property prediction models. These properties provide insights into the molecule's behavior in various environments.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Where is the search feature shown?</div>
              <div className="card-body">
                <p className="card-text">
                The search feature is displayed at the bottom of the search prediction section on the search page sfter entering the smile string. For more details, please refer to the <a href="/how-to-use" target="_blank">How to Use</a> guide.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: Are there any limitations on the types of molecules for which predictions can be made?</div>
              <div className="card-body">
                <p className="card-text">
                  The server supports a wide range of molecules, but predictions may be limited for highly complex or unusual structures. Additionally, if features cannot be generated from a SMILES string, an error will be reported.
                </p>
              </div>
            </div>
          </div>

        );
      default:
        return null;
    }
  };

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
                  className={`list-group-item ${activeSection === "general" ? "active" : ""}`}
                  onClick={() => setActiveSection("general")}
                >
                  General
                </li>
                <li
                  className={`list-group-item ${activeSection === "predict" ? "active" : ""}`}
                  onClick={() => setActiveSection("predict")}
                >
                  Predict
                </li>
                <li
                  className={`list-group-item ${activeSection === "search" ? "active" : ""}`}
                  onClick={() => setActiveSection("search")}
                >
                  Search
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10">
            {renderSection()} {/* Render the active section */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;