import React, { useEffect } from 'react';
import Home from '../Home/Home';

const CoSysLab = () => {
  useEffect(() => {
    window.open("https://cosylab.iiitd.edu.in/", "_blank");
  }, []);

  return <Home />; // Render the Home component
};

export default CoSysLab;
