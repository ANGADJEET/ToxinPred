import React, { useEffect, useState } from 'react';

const JsmeSketcher = ({ onMoleculeChange }) => {
  const [jsmeApplet, setJsmeApplet] = useState(null);

  useEffect(() => {
    // Initialize JSME applet
    if (window.jsmeOnLoad) {
      window.jsmeOnLoad();
      setJsmeApplet(window.jsmeApplet);
    } else {
      console.error('jsmeOnLoad function is not defined.');
    }

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const getSmiles = () => {
    if (jsmeApplet) {
      const smiles = jsmeApplet.smiles();
      alert(`SMILES string: ${smiles}`);
      if (onMoleculeChange) {
        onMoleculeChange(smiles);
      }
    } else {
      console.error('JSME applet is not initialized.');
    }
  };

  return (
    <div className="text-center">
      <div id="jsme_container" style={{ width: '100%', height: '400px', margin: 'auto' }} />
      <button onClick={getSmiles} className="mt-3 btn btn-primary">
        Get SMILES
      </button>
    </div>
  );
};

export default JsmeSketcher;
