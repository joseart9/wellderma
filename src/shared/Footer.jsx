import { Icon, Logo } from '../design-system';
import { CONTACT, navFor } from './site.js';

export function Footer({ page }) {
  const social = { width: 44, height: 44, borderRadius: 'var(--radius-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)' };
  return (
    <footer id={page === 'inicio' ? 'contacto' : undefined} style={{ paddingBottom: 36 }}>
      <div className="wrap">
        <div className="foot" style={{ borderTop: '1px solid var(--sand-200)', paddingTop: 36 }}>
          <a href={page === 'inicio' ? '#inicio' : '/'} aria-label="Well Derma — Inicio"><Logo variant="horizontal" tone="summit" height={34} /></a>
          <nav aria-label="Pie de página" className="foot-links">
            {navFor(page).map((l) => <a key={l.id} href={l.href}>{l.label}</a>)}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Well Derma en Facebook" style={social}><Icon name="facebook" size={18} strokeWidth={1.6} /></a>
              <a href="#" aria-label="Well Derma en Instagram" style={social}><Icon name="instagram" size={18} strokeWidth={1.6} /></a>
            </div>
            <span aria-hidden="true" style={{ width: 1, height: 40, background: 'var(--sand-300)' }}></span>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: '.18em', lineHeight: 1.6, textTransform: 'uppercase', color: 'var(--summit-700)' }}>Tu piel,<br />en buenas manos.</p>
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--sand-600)', fontVariantNumeric: 'lining-nums' }}>
          <span>{CONTACT.address} · <a href={'tel:' + CONTACT.tel} style={{ color: 'var(--summit-600)' }}>{CONTACT.phone}</a></span>
          <span>© {new Date().getFullYear()} Well Derma · Aviso de privacidad</span>
        </div>
      </div>
    </footer>
  );
}
