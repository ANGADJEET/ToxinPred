import { Card,Form, Button, Spinner } from "react-bootstrap";
import "./MiniBatchPredictionForm.css";
const MiniBatchPredictionForm = ({
  miniBatch,
  setMiniBatch,
  handleMiniBatchSubmit,
  loadingMiniBatch,
}) => (
  <Card className="p-3 custom-card">
  <Card.Title className="text-center custom-title">MiniBatch</Card.Title>
  <Card.Body>
  <Form onSubmit={handleMiniBatchSubmit}>
    <Form.Group controlId="miniBatch" className="mb-3">
      <Form.Label>SMILES Strings</Form.Label>
      <Form.Control
        as="textarea"
        rows={10}
        value={miniBatch}
        onChange={(e) => setMiniBatch(e.target.value)}
        required
        placeholder="Enter SMILES strings, one per line"
      />
    </Form.Group>
    {!loadingMiniBatch ? (
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

export default MiniBatchPredictionForm;
