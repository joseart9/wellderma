import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function IconButton({ icon, label, variant = 'outline', size = 44, onClick, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const V = {
    outline: { bg: hover ? 'rgba(122,148,157,.10)' : 'transparent', fg: 'var(--summit-700)', bd: 'var(--summit-300)' },
    solid: { bg: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', fg: 'var(--text-on-brand)', bd: 'transparent' },
    cream: { bg: hover ? 'var(--white)' : 'var(--glass-bg)', fg: 'var(--summit-800)', bd: 'transparent' },
    ghost: { bg: hover ? 'rgba(122,148,157,.12)' : 'transparent', fg: 'var(--summit-700)', bd: 'transparent' },
  }[variant];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : 'button'} aria-label={label} title={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, borderRadius: '50%', border: `1px solid ${V.bd}`, background: V.bg, color: V.fg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, backdropFilter: variant === 'cream' ? 'var(--glass-blur)' : undefined, transition: 'background var(--dur-fast) var(--ease-out)', boxSizing: 'border-box', ...style }} {...rest}>
      <Icon name={icon} size={Math.round(size * 0.42)} />
    </Tag>
  );
}
