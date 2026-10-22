import { useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, IconButton } from '../design-system';
import { Header } from '../shared/Header.jsx';
import { Footer } from '../shared/Footer.jsx';
import { IMG } from '../shared/site.js';
import { BookingProvider } from '../shared/Booking.jsx';
import { useReveal } from '../shared/motion.js';

// In display order. size: big (2×2), wide (2×1), tall (1×2) or omitted (1×1); the grid packs them.
const PHOTOS = [
  { size: 'big', src: 'pharmacy-entrance.jpg', alt: 'Recepción de Well Derma con el logotipo en latón y la farmacia dermatológica al fondo', pos: '62% 50%' },
  { size: 'wide', src: 'pharmacy-shelves.jpg', alt: 'Repisas iluminadas de la farmacia dermatológica', pos: '40% 45%' },
  { src: 'consultory-room.jpg', alt: 'Consultorio con lavabo, sillas y camilla', pos: '55% 60%' },
  // Same shelves photo, cropped in on the curved shelving and lighting.
  { crop: true, src: 'pharmacy-shelves.jpg', alt: 'Detalle de las repisas curvas y la iluminación de la farmacia', pos: '92% 30%' },
  { size: 'tall', src: 'waiting-room.jpg', alt: 'Sala de espera con el logotipo de Well Derma en latón y banca azul iluminada', pos: '40% 50%' },
  { size: 'wide', src: 'treatment-chair.jpg', alt: 'Sillón de tratamiento y sillas de acompañante en un consultorio', pos: '40% 60%' },
  { size: 'tall', src: 'consultory-hallway.jpg', alt: 'Pasillo de consultorios', pos: '50% 50%' },
  { size: 'wide', src: 'alphascience-products.jpg', alt: 'Sueros y tratamientos Alphascience de la farmacia dermatológica', pos: '50% 50%' },
  { size: 'big', src: 'procedure-room.jpg', alt: 'Sala de procedimientos con camilla, lavabo y carros de instrumental', pos: '50% 60%' },
  { size: 'big', src: 'procedure-room-2.jpg', alt: 'Sala de procedimientos vista desde la entrada', pos: '55% 60%' },
];

// Full-size viewer on the design system's media Dialog: arrows or keyboard ←/→ to browse, swipe on touch screens.
function Lightbox({ index, onClose, onStep }) {
  const touchX = useRef(null);
  const open = index !== null;
  const photo = open ? PHOTOS[index] : null;

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    requestAnimationFrame(() => document.querySelector('[role="dialog"] button')?.focus());
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [open, onStep]);

  const arrow = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1 };
  return (
    <Dialog open={open} onClose={onClose} title={photo?.alt} variant="media">
      {photo && (
        <figure className="lightbox" style={{ margin: 0 }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
            if (Math.abs(dx) > 40) onStep(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}>
          <div style={{ position: 'relative' }}>
            <img key={photo.src + index} src={IMG + photo.src} alt={photo.alt} />
            <IconButton icon="chevron-left" label="Foto anterior" variant="cream" size={44} onClick={() => onStep(-1)} style={{ ...arrow, left: 12 }} />
            <IconButton icon="chevron-right" label="Foto siguiente" variant="cream" size={44} onClick={() => onStep(1)} style={{ ...arrow, right: 12 }} />
          </div>
          <figcaption style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 12, fontSize: 13.5, lineHeight: 1.45, color: 'var(--summit-100)' }}>
            <span>{photo.alt}</span>
            <span aria-hidden="true" style={{ whiteSpace: 'nowrap', fontVariantNumeric: 'lining-nums', color: 'var(--summit-200)' }}>{index + 1} / {PHOTOS.length}</span>
          </figcaption>
        </figure>
      )}
    </Dialog>
  );
}

export function GalleryPage() {
  const [viewing, setViewing] = useState(null);
  useReveal();
  const onStep = useCallback((d) => setViewing((i) => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length)), []);

  return (
    <BookingProvider>
      <div className="wd" style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
        <Header page="galeria" />
        <main>
          <section id="galeria" aria-labelledby="g-title" className="sec-gallery">
            <h1 id="g-title" className="sr">Galería de la clínica</h1>
            <div className="wrap">
              <div className="bento">
                {PHOTOS.map((p, i) => (
                  <figure key={p.src + i} className={'g-tile' + (p.size ? ' g-' + p.size : '') + (p.crop ? ' g-crop' : '')} data-reveal={i % 4} style={{ margin: 0, position: 'relative', overflow: 'hidden', borderRadius: 28, background: 'var(--summit-100)' }}>
                    <button type="button" className="g-open" aria-label={'Ver en tamaño completo: ' + p.alt} onClick={() => setViewing(i)}>
                      <img className="g-img" src={IMG + p.src} alt={p.alt} loading={i ? 'lazy' : 'eager'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: p.pos }} />
                    </button>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer page="galeria" />
      </div>
      <Lightbox index={viewing} onClose={() => setViewing(null)} onStep={onStep} />
    </BookingProvider>
  );
}
