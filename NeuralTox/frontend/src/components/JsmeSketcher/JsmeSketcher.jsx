import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const JsmeSketcher = ({ handleDrawingSubmit, loadingDrawing }) => {
  const [jsmeApplet, setJsmeApplet] = useState(null);

  useEffect(() => {
    // Initialize JSME applet
    const initializeJsme = () => {
      if (window.jsmeOnLoad) {
        window.jsmeOnLoad();
        const applet = window.jsmeApplet;
        setJsmeApplet(applet);
      } else {
        console.error('JSME onLoad function is not defined.');
      }
    };

    if (document.readyState === 'complete') {
      initializeJsme();
    } else {
      window.addEventListener('load', initializeJsme);
    }

    return () => {
      window.removeEventListener('load', initializeJsme);
    };
  }, []);

  const getSmilesAndSubmit = () => {
    if (jsmeApplet) {
      const smiles = jsmeApplet.smiles(); // Get SMILES string from the sketcher
      if (handleDrawingSubmit) {
        handleDrawingSubmit(smiles); // Submit the SMILES string via the prop
      }
    } else {
      console.error('JSME applet is not initialized.');
    }
  };

  return (
    <Container fluid className="my-4 ">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div id="jsme_container" style={{ width: '100%', height: '400x', marginRight : '400px'}} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="text-center">
          <Button
            onClick={getSmilesAndSubmit}
            className="mt-3"
            variant="primary"
            disabled={loadingDrawing}
          >
            {loadingDrawing ? 'Loading...' : 'Predict'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JsmeSketcher;
