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
                  BitterSweet provides the following services:
                  <ul>
                    <li>Categorical prediction of bitter and sweet tastes of small molecules.</li>
                    <li>Prediction of receptors linked to bitter molecules.</li>
                    <li>Batch prediction of compounds (up to 200).</li>
                    <li>Structured exploration of curated information on bitter and sweet molecules.</li>
                    <li>Structured exploration of predicted information on bitter-sweet taste of molecules from Super Natural II, FooDB, FlavorDB, DrugBank, and DSSTox.</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: Which web browsers are supported by BitterSweet?</div>
              <div className="card-body">
                <p className="card-text">
                  BitterSweet has been tested to run successfully on the following systems:
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
                  While all the functionality of BitterSweet can be accessed using a mobile browser, BitterSweet is best viewed on mid to large screen sizes.
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
                  You can contact the support team via the contact form on our website, or by sending an email to support@bittersweet.com.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q6: Where can I find documentation and user guides?</div>
              <div className="card-body">
                <p className="card-text">
                  Documentation and user guides can be found in the 'Help' section of our website or by visiting the following link: <a href="https://docs.bittersweet.com" target="_blank" rel="noopener noreferrer">Documentation</a>.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q7: How often is the data updated?</div>
              <div className="card-body">
                <p className="card-text">
                  Data is updated regularly to ensure accuracy and relevance. Updates are typically made on a quarterly basis.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q8: Can I contribute to the BitterSweet database?</div>
              <div className="card-body">
                <p className="card-text">
                  Contributions to the BitterSweet database are welcome. Please contact us through the 'Contribute' section on our website for more details on how to contribute.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q9: Are there any costs associated with using BitterSweet?</div>
              <div className="card-body">
                <p className="card-text">
                  BitterSweet offers both free and premium services. Basic features are available at no cost, while advanced features may require a subscription or payment.
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
              <div className="card-header">Q1: Which input formats are supported by BitterSweet for generating predictions?</div>
              <div className="card-body">
                <p className="card-text">
                  One or more chemical identifiers (SMILES / InChI / SDF / MOL File / PubChem ID / ZINC15 ID).
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: How do I interpret the prediction output?</div>
              <div className="card-body">
                <p className="card-text">
                  For information regarding interpretation of prediction output, please click here.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Can I get predictions for multiple molecules at once?</div>
              <div className="card-body">
                <p className="card-text">
                  Yes, you can upload a batch of up to 200 molecules at a time for batch prediction.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: Are there any limitations on the number of predictions I can make?</div>
              <div className="card-body">
                <p className="card-text">
                  While there is no strict limit on the number of predictions, large-scale batch predictions may be subject to usage policies and performance considerations.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q5: How accurate are the predictions made by BitterSweet?</div>
              <div className="card-body">
                <p className="card-text">
                  The accuracy of predictions depends on the quality of the input data and the underlying models. BitterSweet uses state-of-the-art methods to provide reliable predictions.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q6: Can I see examples of prediction results?</div>
              <div className="card-body">
                <p className="card-text">
                  Examples of prediction results can be found in the 'Examples' section on our website or by requesting sample data from the support team.
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
              <div className="card-header">Q1: What kind of search methods and look up methods are available for molecules on top which the server is created?</div>
              <div className="card-body">
                <p className="card-text">
                  Search of molecules is available by the use of the following parameters:
                  <ul>
                    <li>Common Name</li>
                    <li>IUPAC Name</li>
                    <li>PubChem ID</li>
                    <li>Functional Group</li>
                    <li>Source of molecule: DrugBank, FooDB, FlavorDB, Super Natural II, and DSSTox.</li>
                    <li>Bitter, Sweet, and Tasteless molecules</li>
                    <li>Linked Bitter Receptors</li>
                    <li>Structure Search (using JSME Molecular Editor)</li>
                    <li>Molecular Properties</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q2: What are functional groups and how were they obtained?</div>
              <div className="card-body">
                <p className="card-text">
                  The ‘functional group’ is an atom, or a group of atoms that has similar chemical properties whenever it occurs in different compounds. It defines the characteristic physical and chemical properties of families of organic compounds. The functional groups were obtained using Checkmol, a free and open-source tool, which detects and assigns functional group information on small molecules.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q3: Can I search for molecules by their properties?</div>
              <div className="card-body">
                <p className="card-text">
                  Yes, you can search for molecules based on various properties such as molecular weight, solubility, and more.
                </p>
              </div>
            </div>

            <div className="custom-card card mt-4">
              <div className="card-header">Q4: How can I search for molecules linked to specific receptors?</div>
              <div className="card-body">
                <p className="card-text">
                  Use the 'Linked Bitter Receptors' search option to find molecules associated with specific receptors.
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