import { createRoot } from 'react-dom/client';
import '../design-system';
import '../styles/site.css';
import '../styles/motion.css';
import '../styles/landing.css';
import { LandingPage } from '../pages/Landing.jsx';

createRoot(document.getElementById('root')).render(<LandingPage />);
