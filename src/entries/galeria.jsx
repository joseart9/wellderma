import { createRoot } from 'react-dom/client';
import '../design-system';
import '../styles/site.css';
import '../styles/motion.css';
import '../styles/galeria.css';
import { GalleryPage } from '../pages/Gallery.jsx';

createRoot(document.getElementById('root')).render(<GalleryPage />);
