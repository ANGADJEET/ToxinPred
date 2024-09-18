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
                    <li>Molecular drawing feature with JSME for visual representation of molecular structures.</li>
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
                  The ToxiPredictor web server implements several security measures to protect user data:
                  <ul>
                    <li><strong>Secure Data Transmission:</strong> All data transmitted between users and the server is encrypted using HTTPS, ensuring that sensitive information is protected from interception during transmission.</li>
                    <li><strong>Data Storage and Privacy:</strong> User data and SMILES strings are securely stored and managed. Access to user data is restricted to authorized personnel only, and data is handled in accordance with privacy policies.</li>
                    <li><strong>Input Validation:</strong> The server performs rigorous validation of user inputs to prevent injection attacks and other security vulnerabilities. This helps in ensuring that only properly formatted and safe data is processed.</li>
                    <li><strong>Authentication and Authorization:</strong> For sensitive operations or data access, the server implements authentication mechanisms to ensure that only authorized users can perform specific actions or view certain data.</li>
                    <li><strong>Regular Security Audits:</strong> The web server undergoes regular security audits and updates to address potential vulnerabilities and ensure that security protocols are up-to-date with the latest standards.</li>
                  </ul>
                </p>
              </div>

            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: What security measures are in place to protect user data?</div>
              <div className="card-body">
                <p className="card-text">
                  BitterSweet employs various security measures including data encryption, secure connections (HTTPS), and regular security audits to protect user data and ensure privacy.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q5: How can I contact the support team?</div>
              <div className="card-body">
                <p className="card-text">
                  You can contact the support team via the contact form on our website, or by sending an email to support@ToxiPredictor.com.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q6: Where can I find documentation and user guides?</div>
              <div className="card-body">
                <p className="card-text">
                  Documentation and user guides can be found in the 'How to use' section of our website.
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
              <div className="card-header">Q6: Can I see examples of prediction results?</div>
              <div className="card-body">
                <p className="card-text">
                  You can see how the results look like in the <a href="/how-to-use" target="_blank">How to Use</a> section on our website. This section provides detailed examples of prediction results and how to interpret them.
                </p>
              </div>
            </div>


            <div className="custom-card card mt-4">
              <div className="card-header">Q7: What should I do if I encounter issues with predictions?</div>
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
                  The server can predict various molecular structures based on a given SMILES string, including:
                  <ul>
                    <li>2D molecular structure diagrams</li>
                    <li>3D molecular conformations</li>
                    <li>Bond connectivity and atom types</li>
                    <li>Functional groups and their locations</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: How are the physicochemical properties of a molecule determined from its SMILES string?</div>
              <div className="card-body">
                <p className="card-text">
                  Physicochemical properties such as molecular weight, solubility, and polarity are determined using algorithms that interpret the SMILES string and apply relevant chemical property prediction models. These properties provide insights into the molecule's behavior in various environments.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Can I visualize the molecular structure derived from a SMILES string?</div>
              <div className="card-body">
                <p className="card-text">
                  Yes, you can visualize the molecular structure derived from a SMILES string using interactive visualization tools integrated into the server. This allows for detailed examination of the molecule's structure.
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