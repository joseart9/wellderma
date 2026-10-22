import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Button, Dialog, Input } from '../design-system';
import { whatsappHref } from './site.js';

// One booking modal per page. Any "Agenda tu cita" button calls useBooking()() to open it,
// optionally with { doctor } to book with a specific doctor or { help: true } to ask for a recommendation.
const BookingContext = createContext(() => {});
export const useBooking = () => useContext(BookingContext);

function bookingMessage(name, date, { doctor, help } = {}) {
  let msg = 'Hola, Well Derma.';
  if (name) msg += ' Soy ' + name + '.';
  msg += ' Me gustaría agendar una valoración';
  if (doctor) msg += ' con la ' + doctor;
  if (date) { const p = date.split('-'); msg += ' para el ' + (p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : date); }
  msg += '.';
  return msg + (help ? ' ¿Me ayudan a elegir doctora?' : ' ¿Qué horarios tienen disponibles?');
}

const today = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };

function BookingDialog({ open, options, onClose }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const sheet = () => document.querySelector('[role="dialog"][aria-modal="true"]');
    requestAnimationFrame(() => sheet()?.querySelector('input')?.focus());
    // Keep Tab inside the dialog while it is open.
    const onKey = (e) => {
      if (e.key !== 'Tab' || !sheet()) return;
      const items = [...sheet().querySelectorAll('button, a[href], input')].filter((el) => !el.disabled);
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [open]);

  // Close only after the click has opened WhatsApp; unmounting the link during the click would cancel it.
  const done = () => setTimeout(() => { onClose(); setName(''); setDate(''); }, 0);

  return (
    <Dialog open={open} onClose={onClose} title="Agenda tu valoración" width={480} style={{ padding: 'clamp(24px, 6vw, 40px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{ margin: '-6px 0 10px', fontSize: 15, lineHeight: 1.55 }}>
          {options.doctor
            ? <>Agenda con la <b style={{ fontWeight: 600, color: 'var(--ink)' }}>{options.doctor}</b>. Déjanos tu nombre y la fecha que prefieres; te atendemos por WhatsApp para confirmar tu cita.</>
            : 'Déjanos tu nombre y la fecha que prefieres. Te atendemos por WhatsApp para confirmar tu cita.'}
        </p>
        <Input id="booking-name" name="nombre" label="Nombre completo" placeholder="Tu nombre" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input id="booking-date" name="fecha" type="date" icon="calendar" label="Fecha preferida" min={today()} value={date} onChange={(e) => setDate(e.target.value)} />
        <Button href={whatsappHref(bookingMessage(name.trim(), date, options))} target="_blank" rel="noopener" onClick={done} fullWidth size="lg" iconLeft="message-circle" className="btn-strong" style={{ marginTop: 10, height: 54, fontSize: 15.5, letterSpacing: 'var(--ls-ui)' }}>Agendar por WhatsApp</Button>
        <p style={{ margin: '4px 0 0', fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)', textAlign: 'center' }}>Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
      </div>
    </Dialog>
  );
}

export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, options: {} });
  const openBooking = useCallback((options = {}) => setState({ open: true, options }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      <BookingDialog open={state.open} options={state.options} onClose={close} />
    </BookingContext.Provider>
  );
}
