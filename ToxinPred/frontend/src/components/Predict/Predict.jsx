import { useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import axios from "axios";
import CustomNavbar from "../Navbar/Navbar";
import PredictionTabs from "../PredictionTabs/PredictionTabs";
import SinglePredictionForm from "../SinglePredictionForm/SinglePredictionForm";
import BatchPredictionForm from "../BatchPredictionForm/BatchPredictionForm";
import MiniBatchPredictionForm from "../MiniBatchPredictionForm/MiniBatchPredictionForm";
import Results from "../PredictionResults/Results";
import Footer from "../Footer/Footer";
import JsmeSketcher from "../JsmeSketcher/JsmeSketcher";
import "./Predict.css";

const Predict = () => {
  const [smile, setSmile] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [loadingMiniBatch, setLoadingMiniBatch] = useState(false);
  const [loadingDrawing, setLoadingDrawing] = useState(false);
  const [file, setFile] = useState(null);
  const [miniBatch, setMiniBatch] = useState("");
  const [activeTab, setActiveTab] = useState("single");

  // Function to handle different types of errors more gracefully
  const handleError = (error) => {
    if (error.response) {
      return error.response.data?.error || "Server Error";
    } else if (error.request) {
      return "Network Error: Unable to reach the server!";
    } else {
      return "Client Error: Something went wrong!";
    }
  };
  
  const handleTabChange = (newTab) => {
    // Clear results and errors when switching tabs
    setActiveTab(newTab);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSingle(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/make-prediction", { smile });
      setResult({ type: "single", value: response.data, smiles: smile });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingSingle(false);
    }
  };

  const handleFileSubmit = (file, email) => {
    // If the email is not provided, set it to null
    const submittedEmail = email || null;
    
    // Prepare the data to be sent, including the file and the email (which could be null)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", submittedEmail);  // Email can be null if not provided

    setLoadingFile(true);
    setResult(null);
    axios.post("http://localhost:5000/make-prediction-file", formData)
      .then((response) => {
        setResult({ type: "batch", value: response.data, email: submittedEmail, smiles: response.data.map((pred) => pred.smile) });
        setError(null);
      })
      .catch((error) => {
        setError(handleError(error));
        setResult(null);
      })
      .finally(() => setLoadingFile(false));

  };
  

  const handleMiniBatchSubmit = async (e) => {
    e.preventDefault();
    setLoadingMiniBatch(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/make-prediction-mini-batch", {
      smiles: miniBatch.split("\n"),
     });
      setResult({ 
        type: "miniBatch", 
        value: response.data,
         smiles: response.data.map((pred) => pred.smile) 
      });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingMiniBatch(false);
    }
  };

  const handleDrawingSubmit = async (smiles) => {
    setLoadingDrawing(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/make-prediction", { smile: smiles });
      setResult({ type: "single", value: response.data, smiles: smiles });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingDrawing(false);
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="custom-title-card">
              <Card.Body>
                <Card.Title className="text-center custom-title">Toxin Predictor</Card.Title>
                <Card.Text className="text-center custom-text">
                  Enter a SMILES string, draw a molecule, or upload a CSV for toxicity prediction.
                </Card.Text>
              </Card.Body>
            </Card>
            <PredictionTabs activeTab={activeTab} setActiveTab={handleTabChange} />
            <Card className="mt-3 shadow-sm custom-card">
              <Card.Body>
                {/* Single Prediction Form */}
                {activeTab === "single" && (
                  <SinglePredictionForm
                    smile={smile}
                    setSmile={setSmile}
                    handleSubmit={handleSubmit}
                    loadingSingle={loadingSingle}
                  />
                )}

                {/* Batch Prediction Form */}
                {activeTab === "batch" && (
                  <BatchPredictionForm
                    file={file}
                    setFile={setFile}
                    handleFileSubmit={handleFileSubmit}
                    loadingFile={loadingFile}
                  />
                )}

                {/* MiniBatch Prediction Form */}
                {activeTab === "miniBatch" && (
                  <MiniBatchPredictionForm
                    miniBatch={miniBatch}
                    setMiniBatch={setMiniBatch}
                    handleMiniBatchSubmit={handleMiniBatchSubmit}
                    loadingMiniBatch={loadingMiniBatch}
                  />
                )}

                {/* Jsme Sketcher for Molecule Drawing */}
                {activeTab === "drawing" && (
                  <JsmeSketcher
                    handleDrawingSubmit={handleDrawingSubmit}
                    loadingDrawing={loadingDrawing}
                  />
                )}

                {/* Results */}
                {result && <Results result={result} />}

                {/* Error Handling */}
                {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <Footer />
    </>
  );
};

export default Predict;
