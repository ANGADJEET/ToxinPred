import { useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";

const BatchPredictionForm = ({ file, setFile, handleFileSubmit, loadingFile }) => {
  const [sendToEmail, setSendToEmail] = useState(false); // Checkbox state
  const [email, setEmail] = useState(""); // Email state

  const handleCheckboxChange = (e) => {
    setSendToEmail(e.target.checked);
    if (!e.target.checked) {
      setEmail(""); // Clear the email if unchecked
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const finalEmail = sendToEmail ? email : null; // Send null if email is not provided
    handleFileSubmit(file, finalEmail); // Pass file and finalEmail (can be null)
  };

  return (
    <Card className="p-3 custom-card">
      <Card.Title className="text-center custom-title">Batch</Card.Title>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="file" className="mb-3">
            <Form.Label>Upload CSV</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </Form.Group>

          {/* Checkbox for large file email option */}
          <Form.Group controlId="sendToEmail" className="mb-3">
            <Form.Check
              type="checkbox"
              label="If the file is very large (over 100 molecules), send results to email?"
              checked={sendToEmail}
              onChange={handleCheckboxChange}
            />
          </Form.Group>

          {/* Email input, shown only if the checkbox is checked */}
          {sendToEmail && (
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required={sendToEmail}  // Conditionally set required attribute
              />
            </Form.Group>
          )}

          {/* Submit Button or Spinner */}
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
};

export default BatchPredictionForm;
