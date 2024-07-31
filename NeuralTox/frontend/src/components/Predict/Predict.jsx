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

const Predict = () => {
  const [smile, setSmile] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [file, setFile] = useState(null);

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
      <div className="custom-container">
        <Container className="mt-5">
          <Row>
            <Col md={6} className="mx-auto">
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
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col md={6} className="mx-auto">
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
            </Col>
          </Row>
        </Container>

        {result && (
          <Container className="mt-5">
            <Row>
              <Col md={6} className="mx-auto">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title className="text-center">
                      Prediction Results
                    </Card.Title>
                    <Alert variant="success custom-alert">
                      {result.type === "single" ? (
                        <p>The molecule is {result.value}</p>
                      ) : (
                        <ul>
                          {result.value.map((res, index) => (
                            <li key={index}>
                              Molecule {index + 1} is {res}
                            </li>
                          ))}
                        </ul>
                      )}
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
