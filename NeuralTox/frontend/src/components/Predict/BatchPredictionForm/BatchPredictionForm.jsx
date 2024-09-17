import { Card, Form, Button, Spinner } from "react-bootstrap";

const BatchPredictionForm = ({ file, setFile, handleFileSubmit, loadingFile }) => (
  <Card className="p-3 custom-card">
    <Card.Title className="text-center custom-title">Single Prediction</Card.Title>
    <Card.Body>
  <Form onSubmit={handleFileSubmit}>
    <Form.Group controlId="file" className="mb-3">
      <Form.Label>Upload CSV</Form.Label>
      <Form.Control
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
    </Form.Group>
    {!loadingFile ? (
      <Button type="submit" variant="primary" className="w-100">
        Submit
      </Button>
    ) : (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )}
  </Form>
</Card.Body>
</Card>
);

export default BatchPredictionForm;
