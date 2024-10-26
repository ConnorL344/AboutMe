import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="position-fixed bottom-0 end-0 m-3"
      variant="primary"
      style={{ zIndex: 1000 }}
    >
      <FaArrowUp />
    </Button>
  ) : null;
};

export default ScrollToTop;
