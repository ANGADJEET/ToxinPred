import { useState, useCallback } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import axios from "axios";
import CustomNavbar from "../Navbar/Navbar";
import PredictionTabs from "../PredictionTabs/PredictionTabs";
import SinglePredictionForm from "../SinglePredictionForm/SinglePredictionForm";
import BatchPredictionForm from "../BatchPredictionForm/BatchPredictionForm";
import MiniBatchPredictionForm from "../MiniBatchPredictionForm/MiniBatchPredictionForm";
import Results from "../SearchResults/SearchResults";
import Footer from "../Footer/Footer";
import JsmeSketcher from "../JsmeSketcher/JsmeSketcher";
import "./Search.css"; 

const Search = () => {
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

  // Function to clear result and error on tab change
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setResult(null);
    setError(null);
  };

  // Handle SMILES search
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSingle(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/search-toxin", { smile });
      setResult({ type: "single", value: response.data });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingSingle(false);
    }
  };

  // Handle file upload for batch search
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    setLoadingFile(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/search-toxin-file", formData);
      setResult({ type: "batch", value: response.data });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingFile(false);
    }
  };

  // Handle minibatch search
  const handleMiniBatchSubmit = async (e) => {
    e.preventDefault();
    setLoadingMiniBatch(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/search-toxin-mini-batch", {
        smiles: miniBatch.split("\n"),
      });
      setResult({ type: "miniBatch", value: response.data });
      setError(null);
    } catch (error) {
      setError(handleError(error));
      setResult(null);
    } finally {
      setLoadingMiniBatch(false);
    }
  };

  // Handle molecule drawing submission (using JsmeSketcher)
  const handleDrawingSubmit = async (smiles) => {
    setLoadingDrawing(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/search-toxin", { smile: smiles });
      setResult({ type: "single", value: response.data });
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
                <Card.Title className="text-center custom-title">ToxinPred Search</Card.Title>
                <Card.Text className="text-center">
                  Enter a SMILES string, draw a molecule, or upload a CSV to search the toxin database.
                </Card.Text>
              </Card.Body>
            </Card>
            <PredictionTabs activeTab={activeTab} setActiveTab={handleTabChange} />
            <Card className="mt-3 shadow-sm custom-card">
              <Card.Body>
                {activeTab === "single" && (
                  <SinglePredictionForm
                    smile={smile}
                    setSmile={setSmile}
                    handleSubmit={handleSubmit}
                    loadingSingle={loadingSingle}
                  />
                )}

                {activeTab === "batch" && (
                  <BatchPredictionForm
                    file={file}
                    setFile={setFile}
                    handleFileSubmit={handleFileSubmit}
                    loadingFile={loadingFile}
                  />
                )}

                {activeTab === "miniBatch" && (
                  <MiniBatchPredictionForm
                    miniBatch={miniBatch}
                    setMiniBatch={setMiniBatch}
                    handleMiniBatchSubmit={handleMiniBatchSubmit}
                    loadingMiniBatch={loadingMiniBatch}
                  />
                )}

                {activeTab === "drawing" && (
                  <JsmeSketcher
                    handleDrawingSubmit={handleDrawingSubmit}
                    loadingDrawing={loadingDrawing}
                  />
                )}

                {result && <Results result={result} />}

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

export default Search;
