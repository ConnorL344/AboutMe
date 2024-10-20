import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import Home from './components/Layout';

function App() {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">      
      <Home />
    </ThemeProvider>
  );
}

export default App;
