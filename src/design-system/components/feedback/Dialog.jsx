import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open, onClose, title, children, width = 520, variant = 'panel', style }) {
  React.useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  const media = variant === 'media';
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, background: media ? 'rgba(20,28,31,.88)' : 'rgba(36,49,55,.45)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
      <div role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: media ? 'auto' : '100%', maxWidth: media ? '92vw' : width, maxHeight: '90vh', overflow: 'auto', background: media ? 'transparent' : 'var(--surface-page)', borderRadius: media ? 'var(--radius-lg)' : 'var(--radius-xl)', boxShadow: media ? 'none' : 'var(--shadow-lg)', padding: media ? 0 : 40, boxSizing: 'border-box', ...style }}>
        <IconButton icon="x" label="Cerrar" variant={media ? 'cream' : 'ghost'} size={40} onClick={onClose} style={{ position: 'absolute', top: media ? 16 : 20, right: media ? 16 : 20, zIndex: 1 }} />
        {title && !media && <h2 style={{ margin: '0 48px 20px 0', fontFamily: 'var(--type-heading)', fontWeight: 400, fontSize: 36, lineHeight: 1.08, color: 'var(--text-strong)' }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
