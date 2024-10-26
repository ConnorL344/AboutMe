import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactForm } from './components/Contact/ContactForm';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
