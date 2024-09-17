import "./Info.css";
import "bootstrap/dist/css/bootstrap.min.css";
import flowChart from "../../assets/latest_flowchart.png";


const Info = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header">Welcome to ToxinPred!</div>
            <div className="card-body">
              <p className="card-text">
                ToxinPred is a machine learning model for predicting the toxicity
                of molecules. It is based on a deep neural network architecture
                and uses a large dataset of 14,134 molecules with over 20,000
                molecular descriptors and fingerprints. The model has been
                trained using a comprehensive feature engineering pipeline and
                robust feature selection process to optimize performance. ToxinPred
                offers a high-performance predictive model that can be used to
                predict the toxicity of new molecules with high accuracy.
              </p>
                <img src={flowChart} alt="Flow Chart" className="img-fluid img-container" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header">Source Code</div>
            <div className="card-body">
              <p className="card-text">
                The source code for is available on GitHub. You can
                access the repository by clicking the button below.
              </p>
              <a href="https://github.com/ANGADJEET/ToxinPred" className="btn btn-primary">
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Features</div>
            <div className="card-body">
              <p className="card-text">
                ToxinPred offers a range of features to facilitate toxicity
                prediction. These include:
              </p>
              <ul>
                <li>High-performance predictive model</li>
                <li>Comprehensive feature engineering pipeline</li>
                <li>Large dataset of 14,134 molecules</li>
                <li>Over 20,000 molecular descriptors and fingerprints</li>
                <li>Robust feature selection process</li>
                <li>Optimized deep neural network model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/" className="d-block h5 mb-1 info-title">
                Predict
              </a>
              <p className="mb-0 info-msg">
                Predict the toxicity of a molecule
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/about" className="d-block h5 mb-1 info-title">
                How to Use
              </a>
              <p className="mb-0 info-msg">
                Instructions on how to use ToxinPred
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/info" className="d-block h5 mb-1 info-title">
                ToxinPredPy
              </a>
              <p className="mb-0 info-msg">Python package for ToxinPred</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
