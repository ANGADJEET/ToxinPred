import "./Info.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Info = () => {
  return (
    <div className="container mb-4">
      <div className="row mb-4 abstract-container">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card info-card p-4 shadow-sm">
            <h2 className="card-title mb-4">Abstract</h2>
            <p className="card-text">
              Accurate prediction of molecular toxicity is crucial for drug discovery and chemical safety assessment. This study presents a comprehensive approach to developing high-performance computational models for toxicity prediction. We curated a large dataset of 14,134 molecules with known toxicity labels from multiple sources. An extensive feature extraction process generated over 20,000 molecular descriptors and fingerprints. We implemented a robust feature selection pipeline incorporating correlation-based filtering, relevance filtering, the Boruta algorithm, and principal component analysis to identify the most informative features. Nine machine learning algorithms were evaluated, with deep neural networks (DNNs) demonstrating superior performance. Our optimized DNN model, tuned using Bayesian optimization, outperformed previous studies across multiple datasets. The model achieved high accuracy (84.36%) and MCC (0.6882) on a combined dataset. This work advances the field of computational toxicology by providing a state-of-the-art predictive model and a systematic approach to feature engineering for molecular toxicity prediction. The developed model has potential applications in early-stage drug screening and chemical risk assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/" className="d-block h5 mb-1 info-title">Predict</a>
              <p className="mb-0 info-msg">Predict the toxicity of a molecule</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/about" className="d-block h5 mb-1 info-title">How to Use</a>
              <p className="mb-0 info-msg">Instructions on how to use NeuralTox</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card custom-card">
            <div className="card-body">
              <a href="/info" className="d-block h5 mb-1 info-title">NeuralToxPy</a>
              <p className="mb-0 info-msg">Python package for NeuralTox</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
