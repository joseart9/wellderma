import { useState } from 'react';
import { Button, Icon } from '../design-system';
import { Header } from '../shared/Header.jsx';
import { Footer } from '../shared/Footer.jsx';
import { CONTACT, IMG } from '../shared/site.js';
import { BookingProvider, useBooking } from '../shared/Booking.jsx';
import { Eyebrow, Glyph, display, em } from '../shared/ui.jsx';
import { useReveal } from '../shared/motion.js';

const TREATMENTS = [
  { icon: 'botox', title: 'Botox', blurb: 'Suaviza líneas de expresión' },
  { icon: 'sculptra', title: 'Sculptra', blurb: 'Estimula tu propio colágeno' },
  { icon: 'nctf', title: 'NCTF', blurb: 'Revitaliza e hidrata la piel' },
  { icon: 'radiesse', title: 'Radiesse', blurb: 'Firmeza y soporte natural' },
  { icon: 'acido-hialuronico', title: 'Ácido hialurónico', blurb: 'Volumen e hidratación' },
  { icon: 'hydrafacial', title: 'Hydrafacial', blurb: 'Limpieza e hidratación profunda' },
  { icon: 'retiro-de-verrugas', title: 'Retiro de verrugas', blurb: 'Procedimiento dermatológico preciso' },
];
const HOURS = [['Lunes', '9 a.m. – 7 p.m.'], ['Martes', '9 a.m. – 7 p.m.'], ['Miércoles', '9 a.m. – 7 p.m.'], ['Jueves', '9 a.m. – 7 p.m.'], ['Viernes', '9 a.m. – 7 p.m.'], ['Sábado', '9 a.m. – 2 p.m.'], ['Domingo', null]];

function Hero() {
  const openBooking = useBooking();
  const trust = [['shield-check', 'Atención', 'médica'], ['heart-handshake', 'Trato', 'personalizado'], ['flask-conical', 'Farmacia', 'en clínica']];
  return (
    <section id="inicio" className="hero" aria-label="Bienvenida">
      <img className="hero-photo" src={IMG + 'pharmacy-shelves.jpg'} alt="Farmacia dermatológica de Well Derma con repisas iluminadas de dermocosméticos" fetchpriority="high" />
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div style={{ position: 'relative', maxWidth: 620 }}>
          <div data-reveal="0"><Eyebrow rule={false} color="var(--summit-600)" style={{ marginBottom: 'var(--hero-gap-s)' }}>Medicina estética · Santiago, N.L.</Eyebrow></div>
          <h1 className="hero-h1" data-reveal="1" style={{ ...display, lineHeight: 0.9, letterSpacing: '-.015em', color: 'var(--summit-800)' }}>
            <span style={{ display: 'block' }}>Piel sana,</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '.15em' }}>belleza
              <svg aria-hidden="true" className="hero-swash" viewBox="0 0 96 34" fill="none"><path d="M6 8 Q48 40 90 8" stroke="var(--wd-summit)" strokeWidth="7" strokeLinecap="round" pathLength="1" /></svg>
            </span>
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--wd-summit)' }}>natural.</span>
          </h1>
          <div className="hero-note" aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', lineHeight: 1, color: 'var(--summit-600)', textAlign: 'center' }}>
            <div>Tu mejor</div><div>versión</div>
            <Glyph name="heart" size={22} strokeWidth={1.6} style={{ marginTop: 6, width: '.73em', height: '.73em' }} />
          </div>
          <p data-reveal="2" className="hero-lead" style={{ maxWidth: 440, lineHeight: 1.55, color: 'var(--ink)' }}>Tratamientos estéticos no quirúrgicos y cuidado avanzado de la piel, con atención médica personalizada.</p>
          <div data-reveal="3" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 'var(--hero-gap-l)' }}>
            <Button onClick={() => openBooking()} size="lg" iconRight="arrow-right" className="btn-strong" style={{ height: 56, padding: '0 30px', fontSize: 15.5, letterSpacing: 'var(--ls-ui)' }}>Agenda tu cita</Button>
            <a href="#tratamientos" className="hero-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 56, padding: '0 26px 0 8px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.75)', border: '1px solid var(--sand-200)', color: 'var(--ink)', textDecoration: 'none', fontSize: 15.5, fontWeight: 600, letterSpacing: 'var(--ls-ui)' }}>
              <span className="chip" style={{ width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--summit-700)' }}><Icon name="arrow-right" size={16} strokeWidth={1.8} /></span>
              Ver tratamientos
            </a>
          </div>
          <ul data-reveal="4" className="trust" style={{ listStyle: 'none', margin: 'var(--hero-gap-xl) 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '20px 32px' }}>
            {trust.map(([ic, a, b]) => (
              <li key={ic} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, lineHeight: 1.3, color: 'var(--ink)' }}>
                <Icon name={ic} size={30} style={{ color: 'var(--summit-700)' }} /><span>{a}<br />{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="tratamientos" aria-labelledby="svc-title" className="sec-treatments">
      <div className="wrap svc-layout">
        <div className="svc-intro" data-reveal="0">
          <Eyebrow style={{ marginBottom: 16 }}>Tratamientos</Eyebrow>
          <h2 id="svc-title" className="h-xl" style={{ ...display, lineHeight: 1.02 }}>Nuestros <span style={{ fontStyle: 'italic', color: 'var(--summit-600)' }}>tratamientos</span></h2>
          <p style={{ margin: '18px 0 0', maxWidth: 360, fontSize: 17, lineHeight: 1.65 }}>Medicina estética no quirúrgica, pensada para cada piel. Cada tratamiento empieza con una valoración médica personalizada.</p>
        </div>
        <ul className="svc-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {TREATMENTS.map((t, i) => (
            <li key={t.title} data-reveal={i % 2 + 1}>
              <div className="svc-row" style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '22px 4px', borderBottom: '1px solid var(--sand-300)' }}>
                <span className="svc-ico" style={{ width: 92, height: 92, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={'/images/treatments/' + t.icon + '.png'} alt="" aria-hidden="true" loading="lazy" width="92" height="92" style={{ width: 92, height: 92, display: 'block' }} />
                </span>
                <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.15, color: 'var(--ink)' }}>{t.title}</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{t.blurb}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Placeholder slots: replace each with a real patient review copied from the clinic's Google Business profile.
const REVIEWS = [
  { quote: '[Reseña real de una paciente, tomada de Google Business.]', author: '[Nombre de la paciente]', rating: 5 },
  { quote: '[Segunda reseña real, tomada de Google Business.]', author: '[Nombre de la paciente]', rating: 5 },
  { quote: '[Tercera reseña real, tomada de Google Business.]', author: '[Nombre de la paciente]', rating: 5 },
];

function RoundButton({ icon, label, onClick }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="round-btn" style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', border: '1px solid var(--sand-300)', background: 'var(--white)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
      <Icon name={icon} size={16} strokeWidth={1.8} />
    </button>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const review = REVIEWS[i];
  const step = (d) => setI((c) => (c + d + REVIEWS.length) % REVIEWS.length);
  return (
    <figure data-reveal="1" aria-roledescription="carrusel" aria-label="Reseñas de pacientes" style={{ margin: 0, background: 'var(--summit-50)', borderRadius: 'var(--radius-card)', padding: '32px 28px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Icon name="quote" size={36} strokeWidth={1.2} style={{ color: 'var(--summit-600)', fill: 'var(--summit-200)' }} />
      <div key={i} className="review-slide" aria-live="polite" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div role="img" aria-label={review.rating + ' de 5 estrellas'} style={{ display: 'flex', gap: 4, color: 'var(--wd-brass)' }}>
          {Array.from({ length: review.rating }, (_, s) => <Icon key={s} name="star" size={16} strokeWidth={0} style={{ fill: 'currentColor' }} />)}
        </div>
        <blockquote style={{ ...display, fontSize: 26, lineHeight: 1.22 }}>“{review.quote}”</blockquote>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--summit-700)' }}>— {review.author}</p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12 }}>
        <RoundButton icon="chevron-left" label="Reseña anterior" onClick={() => step(-1)} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {REVIEWS.map((_, n) => (
            <button key={n} type="button" className="review-dot" aria-label={'Reseña ' + (n + 1) + ' de ' + REVIEWS.length} aria-current={n === i || undefined} onClick={() => setI(n)}>
              <span style={{ width: n === i ? 18 : 6, background: n === i ? 'var(--summit-700)' : 'var(--summit-200)' }}></span>
            </button>
          ))}
        </div>
        <RoundButton icon="chevron-right" label="Siguiente reseña" onClick={() => step(1)} />
      </div>
    </figure>
  );
}

function Approach() {
  return (
    <section aria-labelledby="enfoque-title" style={{ padding: '40px 0' }}>
      <div className="wrap split">
        <div className="split-card" data-reveal="0" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--summit-100)', border: '1px solid var(--summit-200)' }}>
          <div className="split-copy" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
            <Eyebrow>Una experiencia más serena</Eyebrow>
            <h2 id="enfoque-title" className="h-l" style={{ ...display, lineHeight: 1.04 }}>Ciencia y cuidado.<br /><span style={em}>Un trato cercano.</span></h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--summit-800)', maxWidth: 380 }}>Combinamos tratamientos avanzados con atención personalizada para que cada visita sea cómoda, tranquila y segura.</p>
            <Button href="/doctoras/" iconRight="arrow-right" className="btn-strong" style={{ alignSelf: 'flex-start', marginTop: 8, height: 52, fontSize: 15, letterSpacing: 'var(--ls-ui)' }}>Conoce más</Button>
          </div>
          <div className="split-media">
            <img src={IMG + 'pharmacy-entrance.jpg'} alt="Recepción de Well Derma con el logotipo en latón y la farmacia al fondo" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 50%', display: 'block' }} />
          </div>
        </div>

        <Reviews />
      </div>
    </section>
  );
}

function Stats() {
  const figure = { fontFamily: 'var(--font-display)', fontSize: 38, lineHeight: 1, color: 'var(--ink)' };
  const stats = [['star', '5.0', 'Calificación en Google'], ['users', '2', 'Doctoras a tu cuidado'], ['flask-conical', 'Farmacia', 'Dermatológica en clínica']];
  return (
    <section aria-label="Well Derma en cifras" style={{ padding: '40px 0' }}>
      <div className="wrap">
        <div className="stats" style={{ borderRadius: 'var(--radius-card)' }}>
          {stats.map(([ic, value, label], i) => (
            <div key={label} className="stat" data-reveal={i}>
              <Glyph name={ic} size={56} strokeWidth={1.2} style={{ color: 'var(--summit-700)' }} />
              <div><div style={figure}>{value}</div><div style={{ marginTop: 4, fontSize: 13.5 }}>{label}</div></div>
            </div>
          ))}
          <div className="stat" data-reveal="3">
            <Glyph name="heart" size={56} strokeWidth={1.2} style={{ color: 'var(--summit-700)' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.1, color: 'var(--ink)' }}>Tu piel,<br /><span style={em}>en buenas manos.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Google Maps embed of the clinic (no API key needed). Loads lazily, only when the section nears the viewport.
function MapPanel() {
  return (
    <div className="visit-map">
      <iframe title="Mapa de ubicación de Well Derma en Santiago, N.L." src={CONTACT.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }} />
    </div>
  );
}

function Visit() {
  return (
    <section id="visitanos" aria-labelledby="visit-title" style={{ padding: '40px 0 72px' }}>
      <div className="wrap">
        <div className="visit" data-reveal="0" style={{ background: 'var(--summit-50)', borderRadius: 'var(--radius-xl)' }}>
          <img className="visit-bg" src={IMG + 'consultory-room.jpg'} alt="" aria-hidden="true" loading="lazy" />
          <div className="visit-bg" aria-hidden="true" style={{ background: 'linear-gradient(90deg, #f1f4f5 0%, rgba(241,244,245,.92) 30%, rgba(241,244,245,.55) 62%, rgba(241,244,245,.08) 100%), linear-gradient(0deg, #f1f4f5 0%, rgba(241,244,245,0) 28%)' }}></div>
          <dl aria-label="Horario" className="hours" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
            {HOURS.map(([day, hours], i) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: i === 0 ? '0 0 11px' : i === HOURS.length - 1 ? '11px 0 0' : '11px 0', borderTop: i ? '1px solid var(--summit-200)' : 0 }}>
                <dt style={{ fontSize: 15, color: 'var(--summit-800)' }}>{day}</dt>
                <dd style={{ margin: 0, fontSize: 15, whiteSpace: 'nowrap', fontWeight: hours ? 600 : 400, color: hours ? 'var(--ink)' : 'var(--summit-600)' }}>{hours || 'Cerrado'}</dd>
              </div>
            ))}
          </dl>
          <div className="visit-copy" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Eyebrow>Horario y ubicación</Eyebrow>
            <h2 id="visit-title" className="h-l" style={{ ...display, lineHeight: 1.04 }}>Visítanos en <span style={em}>Santiago</span></h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'var(--summit-800)', maxWidth: 360 }}>Te recibimos en clínica para tu valoración, tratamientos y compras en nuestra farmacia dermatológica.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
              <Button href={CONTACT.maps} target="_blank" rel="noopener" iconRight="arrow-right" className="btn-strong" style={{ height: 52, fontSize: 15, letterSpacing: 'var(--ls-ui)' }}>Cómo llegar</Button>
              <Button href={'tel:' + CONTACT.tel} variant="secondary" iconLeft="phone" style={{ height: 52, padding: '0 24px', fontSize: 15, letterSpacing: 'var(--ls-ui)', color: 'var(--ink)', borderColor: 'transparent', fontVariantNumeric: 'lining-nums' }}>{CONTACT.phone}</Button>
            </div>
          </div>
          <MapPanel />
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  useReveal();
  return (
    <BookingProvider>
      <div className="wd" style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
        <Header page="inicio" />
        <main>
          <Hero />
          <Treatments />
          <Approach />
          <Stats />
          <Visit />
        </main>
        <Footer page="inicio" />
      </div>
    </BookingProvider>
  );
}
