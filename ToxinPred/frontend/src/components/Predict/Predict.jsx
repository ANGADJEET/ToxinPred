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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSingle(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/make-prediction", { smile });
      setResult({ type: "single", value: response.data.prediction });
      setError(null);
    } catch (error) {
      setError("Error making prediction!");
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
      const response = await axios.post("http://localhost:5000/make-prediction-file", formData);
      setResult({ type: "batch", value: response.data.predictions });
      setError(null);
    } catch (error) {
      setError("Error making batch prediction!");
      setResult(null);
    } finally {
      setLoadingFile(false);
    }
  };

  const handleMiniBatchSubmit = async (e) => {
    e.preventDefault();
    setLoadingMiniBatch(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/make-prediction-mini-batch", { smiles: miniBatch.split("\n") });
      setResult({ type: "miniBatch", value: response.data.predictions });
      setError(null);
    } catch (error) {
      setError("Error making mini-batch prediction!");
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
      setResult({ type: "single", value: response.data.prediction });
      setError(null);
    } catch (error) {
      setError("Error making prediction from drawing!");
      setResult(null);
    } finally {
      setLoadingDrawing(false);
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5 custom -card">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="custom-title-card">
              <Card.Body>
                <Card.Title className="text-center custom-title">ToxinPred Predictor</Card.Title>
                <Card.Text className="text-center custom-text">
                  Enter a SMILES string, draw a molecule, or upload a CSV for toxicity prediction.
                </Card.Text>
              </Card.Body>
            </Card>
            <PredictionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
