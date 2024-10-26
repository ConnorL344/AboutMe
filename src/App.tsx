import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavBar from './components/NavBar/NavBar';
import LoadingSpinner from './components/Common/LoadingSpinner';

const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
// const ContactForm = lazy(() => import('./components/Contact/ContactForm').then(module => ({ default: module.ContactForm })));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;