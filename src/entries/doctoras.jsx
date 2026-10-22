import { createRoot } from 'react-dom/client';
import '../design-system';
import '../styles/site.css';
import '../styles/motion.css';
import '../styles/doctoras.css';
import { DoctorsPage } from '../pages/Doctors.jsx';

createRoot(document.getElementById('root')).render(<DoctorsPage />);
