import { Card,Form, Button, Spinner } from "react-bootstrap";
import "./SinglePredictionForm.css";
const SinglePredictionForm = ({ smile, setSmile, handleSubmit, loadingSingle }) => (
  <Card className="p-3 custom-card">
    <Card.Title className="text-center custom-title">Single</Card.Title>
    <Card.Body>
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="smile" className="mb-3">
      <Form.Label>SMILES Input</Form.Label>
      <Form.Control
        type="text"
        value={smile}
        onChange={(e) => setSmile(e.target.value)}
        required
        placeholder="C1=CC=CC=C1"
      />
    </Form.Group>
    {!loadingSingle ? (
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

export default SinglePredictionForm;
