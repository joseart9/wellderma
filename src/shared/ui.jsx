import { Icon } from '../design-system';

export const display = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--ink)' };
export const em = { fontStyle: 'italic', color: 'var(--summit-700)' };

// Lucide glyphs the design uses that the system's Icon set does not include yet.
const EXTRA_ICONS = {
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
};

export function Glyph({ name, size = 20, strokeWidth = 1.5, style }) {
  if (!EXTRA_ICONS[name]) return <Icon name={name} size={size} strokeWidth={strokeWidth} style={style} />;
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', flexShrink: 0, ...style }}>{EXTRA_ICONS[name]}</svg>;
}

export function Eyebrow({ children, rule = true, color = 'var(--summit-700)', style }) {
  return (
    <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--fs-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color, ...style }}>
      {rule && <span aria-hidden="true" style={{ width: 28, height: 1, background: 'currentColor' }}></span>}{children}
    </p>
  );
}
