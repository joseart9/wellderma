import { Header } from '../shared/Header.jsx';
import { Footer } from '../shared/Footer.jsx';
import { IMG } from '../shared/site.js';
import { BookingProvider } from '../shared/Booking.jsx';
import { useReveal } from '../shared/motion.js';

const PHOTOS = [
  { cls: 'g-a', src: 'pharmacy-entrance.jpg', alt: 'Recepción de Well Derma con el logotipo en latón y la farmacia dermatológica al fondo', pos: '62% 50%' },
  { cls: 'g-b', src: 'pharmacy-shelves.jpg', alt: 'Repisas iluminadas de la farmacia dermatológica', pos: '40% 45%' },
  { cls: 'g-c', src: 'consultory-room.jpg', alt: 'Consultorio con lavabo, sillas y camilla', pos: '55% 60%' },
  // Same shelves photo, cropped in on the curved shelving and lighting.
  { cls: 'g-d g-crop', src: 'pharmacy-shelves.jpg', alt: 'Detalle de las repisas curvas y la iluminación de la farmacia', pos: '92% 30%' },
];

export function GalleryPage() {
  useReveal();
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
                  <figure key={p.cls} className={'g-tile ' + p.cls} data-reveal={i} style={{ margin: 0, position: 'relative', overflow: 'hidden', borderRadius: 28, background: 'var(--summit-100)' }}>
                    <img className="g-img" src={IMG + p.src} alt={p.alt} loading={i ? 'lazy' : 'eager'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: p.pos }} />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer page="galeria" />
      </div>
    </BookingProvider>
  );
}
