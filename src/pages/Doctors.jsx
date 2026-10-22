import { useState } from 'react';
import { Button, Icon } from '../design-system';
import { Header } from '../shared/Header.jsx';
import { Footer } from '../shared/Footer.jsx';
import { IMG } from '../shared/site.js';
import { BookingProvider, useBooking } from '../shared/Booking.jsx';
import { Eyebrow, display, em } from '../shared/ui.jsx';
import { useReveal } from '../shared/motion.js';

// Bracketed copy is placeholder text waiting for the clinic's real details.
const DOCTORS = [
  {
    name: 'Dra. Alejandra Villarreal', first: 'Dra. Alejandra', last: 'Villarreal',
    role: '[Especialidad — por confirmar]',
    summary: '[Breve presentación de la Dra. Alejandra Villarreal: su experiencia y lo que la distingue.]',
    photo: IMG + 'dr-alejandra-villarreal.jpg',
    items: [
      ['Formación', '[Universidad, especialidad y certificaciones de la Dra. Alejandra Villarreal.]'],
      ['Su enfoque', '[Cómo trabaja con sus pacientes: valoración, plan personalizado y seguimiento.]'],
      ['Tratamientos que realiza', '[Ej. Botox, Sculptra, ácido hialurónico — confirmar con la clínica.]'],
    ],
    stats: [['[X]+', 'Años de experiencia'], ['[X]+', 'Pacientes atendidas'], ['[X]', 'Certificaciones'], ['[Núm.]', 'Cédula profesional']],
  },
  {
    name: 'Dra. Fania Muñoz', first: 'Dra. Fania', last: 'Muñoz',
    role: '[Especialidad — por confirmar]',
    summary: '[Breve presentación de la Dra. Fania Muñoz: su experiencia y lo que la distingue.]',
    photo: IMG + 'dr-fania-munoz.jpg',
    items: [
      ['Formación', '[Universidad, especialidad y certificaciones de la Dra. Fania Muñoz.]'],
      ['Su enfoque', '[Cómo trabaja con sus pacientes: valoración, plan personalizado y seguimiento.]'],
      ['Tratamientos que realiza', '[Ej. Hydrafacial, NCTF, retiro de verrugas — confirmar con la clínica.]'],
    ],
    stats: [['[X]+', 'Años de experiencia'], ['[X]+', 'Pacientes atendidas'], ['[X]', 'Certificaciones'], ['[Núm.]', 'Cédula profesional']],
  },
];

function Sparkle({ size, color, style }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ position: 'absolute', ...style }}><path d="M12 1.5c.5 5.6 4.9 10 10.5 10.5-5.6.5-10 4.9-10.5 10.5C11.5 16.9 7.1 12.5 1.5 12 7.1 11.5 11.5 7.1 12 1.5Z" /></svg>;
}

function DoctorProfile({ doctor: d, index, open, onToggle }) {
  const openBooking = useBooking();
  const headId = 'doc-name-' + index;
  const panelId = 'doc-panel-' + index;
  return (
    <article aria-labelledby={headId} data-reveal="0" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ position: 'relative', background: 'var(--summit-700)', borderRadius: 36, boxShadow: '0 14px 0 #d3dee2', overflow: 'hidden' }}>
          <svg aria-hidden="true" viewBox="0 0 600 600" style={{ position: 'absolute', left: -140, bottom: -240, width: 520, height: 520, opacity: 0.07 }}>
            <circle cx="300" cy="300" r="290" fill="none" stroke="var(--wd-fresh-cream)" strokeWidth="2" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="var(--wd-fresh-cream)" strokeWidth="2" />
          </svg>
          <div className="wrap doc-top" style={{ position: 'relative', paddingTop: 56, paddingBottom: 72 }}>
            <div>
              <h2 id={headId} className="doc-name" style={{ ...display, fontSize: 72, lineHeight: 0.98, letterSpacing: '-.01em', color: 'var(--wd-fresh-cream)' }}>{d.first}<br /><span style={{ fontStyle: 'italic', color: 'var(--summit-200)' }}>{d.last}</span></h2>
              <p style={{ margin: '18px 0 0', fontSize: 16, fontWeight: 600, color: 'var(--wd-brass-soft)' }}>{d.role}</p>
              <p style={{ margin: '14px 0 0', maxWidth: 440, fontSize: 17, lineHeight: 1.6, color: 'var(--summit-100)' }}>{d.summary}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
                <Button onClick={() => openBooking({ doctor: d.name })} aria-label={'Agenda tu cita con ' + d.name} variant="cream" size="lg" iconRight="arrow-right" className="btn-cream-flat" style={{ height: 56, padding: '0 30px', fontSize: 15.5, letterSpacing: 'var(--ls-ui)', color: 'var(--ink)' }}>Agenda tu cita</Button>
              </div>
            </div>
            <div className="doc-portrait" aria-hidden="true">
              <div className="doc-disc" style={{ position: 'absolute', left: '50%', top: '50%', width: 400, height: 400, transform: 'translate(-50%, -50%)', borderRadius: 'var(--radius-pill)', background: 'var(--summit-600)' }}></div>
              <div className="doc-arch" style={{ position: 'absolute', left: '50%', top: 24, width: 290, height: 420, transform: 'translateX(-50%)', borderRadius: '999px 999px 26px 26px', overflow: 'hidden', boxShadow: '0 32px 64px -24px rgba(0,0,0,.45)' }}>
                <img src={d.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%', display: 'block' }} />
              </div>
              <Sparkle size={42} color="var(--wd-brass-soft)" style={{ left: '14%', top: 40 }} />
              <svg aria-hidden="true" className="doc-dot" width="16" height="16" viewBox="0 0 24 24" fill="var(--summit-200)" style={{ position: 'absolute', right: '12%', top: 360 }}><circle cx="12" cy="12" r="10" /></svg>
            </div>
          </div>
        </div>
        <button type="button" className="doc-toggle" onClick={onToggle} aria-expanded={open} aria-controls={panelId} aria-label={(open ? 'Cerrar el perfil de ' : 'Abrir el perfil de ') + d.name}
          style={{ position: 'absolute', zIndex: 3, left: '50%', bottom: -30, transform: 'translateX(-50%)', width: 132, height: 56, border: 0, borderRadius: '0 0 32px 32px', background: 'var(--summit-700)', boxShadow: '0 14px 0 #d3dee2', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '0 0 12px', color: 'var(--wd-fresh-cream)', cursor: 'pointer' }}>
          <Icon name="chevron-down" size={22} strokeWidth={1.8} className="doc-chev" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </button>
      </div>

      <div id={panelId} className="doc-panel" role="region" aria-label={'Perfil de ' + d.name} style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="doc-panel-in" inert={open ? undefined : ''}>
          <div className="doc-panel-body" style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-16px)', marginTop: 34, background: 'var(--summit-50)', borderRadius: 36 }}>
            <div className="wrap doc-detail">
              <div>
                <Eyebrow rule={false} style={{ marginBottom: 8 }}>Perfil de la doctora</Eyebrow>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                  {d.items.map(([title, text]) => (
                    <li key={title} style={{ padding: '24px 0', borderBottom: '1px solid var(--summit-200)' }}>
                      <h3 style={{ ...display, fontSize: 28, lineHeight: 1.15 }}>{title}</h3>
                      <p style={{ margin: '8px 0 0', fontSize: 15, lineHeight: 1.6 }}>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ position: 'relative', padding: '18px 18px 0 0' }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, bottom: -18, left: 18, border: '1.5px solid var(--summit-300)', borderRadius: '999px 999px 32px 32px' }}></div>
                <div className="doc-detail-arch" style={{ position: 'relative', borderRadius: '999px 999px 32px 32px', overflow: 'hidden', background: '#d3dee2' }}>
                  <img src={d.photo} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%', display: 'block' }} />
                </div>
                <Sparkle size={38} color="var(--wd-brass)" style={{ left: -14, top: 90 }} />
              </div>
              <div className="doc-stats">
                {d.stats.map(([value, label]) => (
                  <div key={label} style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 42, lineHeight: 1, color: 'var(--ink)' }}>{value}</div>
                    <div style={{ marginTop: 6, fontSize: 13.5 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// Lives inside BookingProvider, so it can open the modal asking the clinic to recommend a doctor.
function HelpButton() {
  const openBooking = useBooking();
  return <Button onClick={() => openBooking({ help: true })} size="lg" iconLeft="message-circle" className="btn-strong" style={{ height: 54, padding: '0 30px', fontSize: 15.5, letterSpacing: 'var(--ls-ui)' }}>Agendar por WhatsApp</Button>;
}

export function DoctorsPage() {
  const [open, setOpen] = useState({ 0: true });
  useReveal();
  return (
    <BookingProvider>
      <div className="wd" style={{ background: 'var(--surface-page)', minHeight: '100vh' }}>
        <Header page="doctoras" />
        <main>
          <section id="doctoras" aria-labelledby="d-title" style={{ padding: '32px 20px 120px' }}>
            <h1 id="d-title" className="sr">Nuestras doctoras</h1>
            <div className="doc-list" style={{ maxWidth: 1400, margin: '0 auto' }}>
              {DOCTORS.map((d, i) => <DoctorProfile key={d.name} doctor={d} index={i} open={!!open[i]} onToggle={() => setOpen({ ...open, [i]: !open[i] })} />)}
            </div>
          </section>

          <section aria-labelledby="cta-title" style={{ padding: '0 0 80px' }}>
            <div className="wrap">
              <div className="cta-box" data-reveal="0" style={{ background: 'var(--summit-50)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
                <div>
                  <h2 id="cta-title" className="h-cta" style={{ ...display, lineHeight: 1.06 }}>¿No sabes con quién <span style={em}>agendar?</span></h2>
                  <p style={{ margin: '10px 0 0', fontSize: 16 }}>Escríbenos y te recomendamos a la doctora ideal para tu valoración.</p>
                </div>
                <HelpButton />
              </div>
            </div>
          </section>
        </main>
        <Footer page="doctoras" />
      </div>
    </BookingProvider>
  );
}
