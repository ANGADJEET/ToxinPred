import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Your Company Name. All rights reserved.</p>
            <p className="mb-0">
              <a href="#privacy-policy" className="footer-link">Privacy Policy</a> | 
              <a href="#terms-of-service" className="footer-link"> Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
