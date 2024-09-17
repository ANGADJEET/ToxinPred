import { Nav } from "react-bootstrap";

const PredictionTabs = ({ activeTab, setActiveTab }) => (
  <ul className="nav nav-tabs">
    {["single", "batch", "drawing", "miniBatch"].map((tab) => (
      <li className="nav-item" key={tab}>
        <a
          className={`nav-link ${activeTab === tab ? "active" : ""}`}
          href="#"
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)} Prediction
        </a>
      </li>
    ))}
  </ul>
);

export default PredictionTabs;
