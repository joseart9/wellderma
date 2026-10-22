import { useEffect, useRef, useState } from 'react';
import { Button, Icon, IconButton, Logo } from '../design-system';
import { CONTACT, navFor } from './site.js';
import { useBooking } from './Booking.jsx';
import { display } from './ui.jsx';

const MOBILE = '(max-width: 900px)';

export function Header({ page }) {
  const [open, setOpen] = useState(false);
  const openBooking = useBooking();
  const panelRef = useRef(null);
  const links = navFor(page);
  const home = page === 'inicio' ? '#inicio' : '/';

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    const mq = window.matchMedia(MOBILE);
    const onResize = () => { if (!mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-open={open || undefined} style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(252,249,241,.86)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', borderBottom: '1px solid rgba(236,229,216,.7)' }}>
        <div className="wrap" style={{ height: 'var(--header-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <a href={home} aria-label="Well Derma — Inicio" style={{ display: 'flex', alignItems: 'center' }}><Logo variant="horizontal" tone="summit" height={38} /></a>
          <nav aria-label="Principal" className="nav-links">
            {links.slice(0, 4).map((l) => <a key={l.id} href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</a>)}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button onClick={() => openBooking()} className="btn-strong hdr-cta" iconRight="arrow-right" style={{ fontSize: 14.5, letterSpacing: 'var(--ls-ui)', padding: '0 24px' }}>Agenda tu cita</Button>
            <IconButton id="menu-toggle" icon={open ? 'x' : 'menu'} label={open ? 'Cerrar menú' : 'Abrir menú'} variant="ghost" size={48} className="menu-toggle"
              aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} style={{ color: 'var(--ink)' }} />
          </div>
        </div>
      </header>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" data-open={open || undefined} inert={open ? undefined : ''} aria-label="Menú">
        <nav aria-label="Menú móvil" className="wrap" style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map((l) => (
            <a key={l.id} href={l.href} aria-current={l.current ? 'page' : undefined} onClick={() => setOpen(false)} className="mobile-link" style={{ ...display, fontSize: 34, lineHeight: 1.1 }}>
              {l.label}<Icon name="arrow-right" size={20} strokeWidth={1.5} />
            </a>
          ))}
        </nav>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
          <Button onClick={() => { setOpen(false); openBooking(); }} fullWidth size="lg" iconRight="arrow-right" className="btn-strong" style={{ height: 54, fontSize: 15.5, letterSpacing: 'var(--ls-ui)' }}>Agenda tu cita</Button>
          <Button href={'tel:' + CONTACT.tel} variant="secondary" fullWidth size="lg" iconLeft="phone" style={{ height: 54, fontSize: 15.5, letterSpacing: 'var(--ls-ui)', color: 'var(--ink)', fontVariantNumeric: 'lining-nums' }}>{CONTACT.phone}</Button>
          <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5, color: 'var(--sand-600)' }}>{CONTACT.address}</p>
        </div>
      </div>
    </>
  );
}
