import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Predict.css";
import axios from "axios";
import {
  Spinner,
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import JsmeSketcher from "../JsmeSketcher/JsmeSketcher";

const Predict = () => {
  const [smile, setSmile] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [loadingMiniBatch, setLoadingMiniBatch] = useState(false);
  const [file, setFile] = useState(null);
  const [miniBatch, setMiniBatch] = useState("");
  const [activeTab, setActiveTab] = useState("single");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { smile };

    setLoadingSingle(true);
    setResult(null); // Clear previous results
    try {
      const response = await axios.post(
        "http://localhost:5000/make-prediction",
        data
      );

      if (response.data && response.data.prediction) {
        setResult({ type: "single", value: response.data.prediction });
        setError(null);
      } else {
        setError("Unexpected response structure");
        setResult(null);
      }
    } catch (error) {
      console.error("There was an error making the prediction!", error);
      setError("There was an error making the prediction!");
      setResult(null);
    } finally {
      setLoadingSingle(false);
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    setLoadingFile(true);
    setResult(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/make-prediction-file",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data && response.data.predictions) {
        setResult({ type: "batch", value: response.data.predictions });
        setError(null);
      } else {
        setError("Unexpected response structure");
        setResult(null);
      }
    } catch (error) {
      console.error("There was an error making the prediction!", error);
      setError("There was an error making the prediction!");
      setResult(null);
    } finally {
      setLoadingFile(false);
    }
  };

  const handleMiniBatchSubmit = async (e) => {
    e.preventDefault();
    const data = { smiles: miniBatch.split('\n') };

    setLoadingMiniBatch(true);
    setResult(null); // Clear previous results
    try {
      const response = await axios.post(
        "http://localhost:5000/make-prediction-mini-batch",
        data
      );

      if (response.data && response.data.predictions) {
        setResult({ type: "miniBatch", value: response.data.predictions });
        setError(null);
      } else {
        setError("Unexpected response structure");
        setResult(null);
      }
    } catch (error) {
      console.error("There was an error making the prediction!", error);
      setError("There was an error making the prediction!");
      setResult(null);
    } finally {
      setLoadingMiniBatch(false);
    }
  };

  const handleMoleculeChange = (smiles) => {
    setSmile(smiles);
  };

  return (
    <>
      <Navbar />
      <Card className="custom-title-card">
        <Card.Body>
          <Card.Title className="text-center custom-title">
            NeuralTox Predictor
          </Card.Title>
          <Card.Text className="text-center custom-text">
            Enter a SMILES string to predict the molecular toxicity of a single
            compound, or upload a CSV file containing multiple SMILES strings
            for batch predictions. Our advanced deep learning model will analyze
            the input and provide accurate toxicity predictions.
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="custom-container d-flex justify-content-center">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "single" ? "active" : ""}`}
                    href="#"
                    onClick={() => setActiveTab("single")}
                  >
                    Single Molecule
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "batch" ? "active" : ""}`}
                    href="#"
                    onClick={() => setActiveTab("batch")}
                  >
                    Batch Upload
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "drawing" ? "active" : ""}`}
                    href="#"
                    onClick={() => setActiveTab("drawing")}
                  >
                    Drawing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "miniBatch" ? "active" : ""}`}
                    href="#"
                    onClick={() => setActiveTab("miniBatch")}
                  >
                    Mini-Batch
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-4">
                {activeTab === "single" && (
                  <div className="tab-pane fade show active">
                    <Card className="shadow-sm custom-card">
                      <Card.Body>
                        <Card.Title className="text-center">
                          Predict for a single molecule
                        </Card.Title>
                        <Card.Text className="text-center">
                          Example Input: C1=CC=CC=C1 (Benzene)
                        </Card.Text>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="smile" className="mb-3">
                            <Form.Label>Make Prediction!</Form.Label>
                            <Form.Control
                              type="text"
                              value={smile}
                              onChange={(e) => setSmile(e.target.value)}
                              required
                              placeholder="C1=CC=CC=C1"
                            />
                          </Form.Group>
                          {!loadingSingle && (
                            <Button type="submit" variant="primary" className="w-100">
                              Submit
                            </Button>
                          )}
                          {loadingSingle && (
                            <div className="d-flex justify-content-center">
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            </div>
                          )}
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {activeTab === "batch" && (
                  <div className="tab-pane fade show active">
                    <Card className="shadow-sm custom-card">
                      <Card.Body>
                        <Card.Title className="text-center">
                          Or Submit a CSV File
                        </Card.Title>
                        <Form onSubmit={handleFileSubmit}>
                          <Form.Group controlId="file" className="mb-3">
                            <Form.Label>Upload CSV</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={(e) => setFile(e.target.files[0])}
                              required
                            />
                          </Form.Group>
                          {!loadingFile && (
                            <Button type="submit" variant="primary" className="w-100">
                              Submit
                            </Button>
                          )}
                          {loadingFile && (
                            <div className="d-flex justify-content-center">
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            </div>
                          )}
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {activeTab === "drawing" && (
                  <div className="tab-pane fade show active">
                    <Card className="shadow-sm custom-card">
                      <Card.Body>
                      <Card.Title className="text-center">Drawing Molecule</Card.Title>
                        <JsmeSketcher onMoleculeChange={handleMoleculeChange}/>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {activeTab === "miniBatch" && (
                  <div className="tab-pane fade show active">
                    <Card className="shadow-sm custom-card">
                      <Card.Body>
                        <Card.Title className="text-center">
                          Predict Multiple Molecules
                        </Card.Title>
                        <Card.Text className="text-center">
                          Input multiple SMILES strings separated by new lines.
                        </Card.Text>
                        <Form onSubmit={handleMiniBatchSubmit}>
                          <Form.Group controlId="miniBatch" className="mb-3">
                            <Form.Label>SMILES Strings</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={10}
                              value={miniBatch}
                              onChange={(e) => setMiniBatch(e.target.value)}
                              required
                              placeholder="Enter SMILES strings, one per line"
                            />
                          </Form.Group>
                          {!loadingMiniBatch && (
                            <Button type="submit" variant="primary" className="w-100">
                              Submit
                            </Button>
                          )}
                          {loadingMiniBatch && (
                            <div className="d-flex justify-content-center">
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            </div>
                          )}
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        {result && (
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title className="text-center">
                      Prediction Results
                    </Card.Title>
                    <Alert variant="success custom-alert">
                      {result.type === "single" ? (
                        <p>The molecule is {result.value}</p>
                      ) : result.type === "batch" ? (
                        <ul>
                          {result.value.map((res, index) => (
                            <li key={index}>
                              Molecule {index + 1} is {res}
                            </li>
                          ))}
                        </ul>
                      ) : result.type === "miniBatch" ? (
                        <ul>
                          {result.value.map((res, index) => (
                            <li key={index}>
                              Molecule {index + 1} is {res}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </Alert>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Predict;
