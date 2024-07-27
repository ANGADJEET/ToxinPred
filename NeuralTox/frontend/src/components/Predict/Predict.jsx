import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Predict.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Predict = () => {
  const [smile, setSmile] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      smile: smile,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/make-prediction",
        data
      );

      console.log(response);

      if (response.data && response.data.prediction) {
        setResult(response.data.prediction);
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
      setLoading(false);
    }
  };

  return (
    <div className="all-container">
      <Navbar />
      <div className="box-container">
        <div className="container mt-5 custom-container">
          <h1 className="headings">Predictor</h1>
          <p>
            This is a simple web application that uses a deep learning model to
            predict the activity of a molecule based on its SMILES
            representation.
          </p>
          <h1 className="headings">Example Input</h1>
          <p>Try entering a SMILES string like: C1=CC=CC=C1 (Benzene)</p>
        </div>
        <div className="container mt-5 form-container custom-container">
          <form onSubmit={handleSubmit}className="form-content">
            <div className="mb-3">
              <label htmlFor="smile" className="form-label form-heading">
                Make Prediction!
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="smile"
                name="smile"
                value={smile}
                onChange={(e) => setSmile(e.target.value)}
                required
                placeholder="C1=CC=CC=C1"
              />
            </div>
            {!loading && (
              <button type="submit" className="btn btn-primary custom-button">
                Submit
              </button>
            )}
            {loading && (
              <div className="spinner-container">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
      {result !== null &&       <div className="predict-container container"><h2 className="headings">The molecule is {result}</h2> </div>}
        <Footer />
    </div>
  );
};

export default Predict;
