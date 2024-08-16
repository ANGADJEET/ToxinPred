import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Predict from './components/Predict/Predict';
import HowToUse from './components/HowToUse/HowToUse';
import ContactUs from './components/ContactUs/ContactUs';
import CoSysLab from './components/CoSysLab/CoSysLab';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cosyslab" element={<CoSysLab />} />
      </Routes>
    </Router>
  );
}

export default App;
