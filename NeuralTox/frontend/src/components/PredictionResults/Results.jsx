import { Alert, Card } from "react-bootstrap";

const Results = ({ result }) => (
  <Card className="shadow-sm">
    <Card.Body>
      <Card.Title className="text-center">Prediction Results</Card.Title>
      <Alert variant="success custom-alert">
        {result.type === "single" && <p>The molecule is {result.value}</p>}
        {["batch", "miniBatch"].includes(result.type) && (
          <ul>
            {result.value.map((res, index) => (
              <li key={index}>Molecule {index + 1} is {res}</li>
            ))}
          </ul>
        )}
      </Alert>
    </Card.Body>
  </Card>
);

export default Results;
