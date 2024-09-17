import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import "./ToxinDB.css"; // For additional custom styling if needed

const ToxinDB = () => {
  const [smiles, setSmiles] = useState("");
  const [activeTab, setActiveTab] = useState("minibatch");

  const handleSearch = () => {
    // Handle SMILES search logic here
    console.log("Searching for SMILES:", smiles);
  };

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle CSV file upload logic here
      console.log("Uploading CSV file:", file);
    }
  };

  const handleMinibatchSubmit = () => {
    // Handle minibatch submission logic here
    console.log("Submitting minibatch");
  };

  return (
    <>
    <Navbar />
    <div className="container my-4">
      <h1 className="mb-4">ToxinDB</h1>

      <Form className="mb-4">
        <Form.Group controlId="formSmiles">
          <Form.Label>Search by SMILES String</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter SMILES string"
            value={smiles}
            onChange={(e) => setSmiles(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      <Tabs
        id="toxindb-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="minibatch" title="Minibatch">
          <Card className="mb-3">
            <Card.Body>
              <Form>
                <Form.Group controlId="formMinibatch">
                  <Form.Label>Minibatch Input</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter minibatch data"
                  />
                  <Button variant="primary" className="mt-2" onClick={handleMinibatchSubmit}>
                    Submit Minibatch
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="csv" title="Upload CSV">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formCSVUpload">
                  <Form.Label>Upload CSV File</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
    </>
  );
};

export default ToxinDB;
