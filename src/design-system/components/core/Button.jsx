import React from 'react';
import { Icon } from '../brand/Icon.jsx';

const SIZES = {
  sm: { h: 38, px: 18, fs: 13, gap: 8, icon: 16 },
  md: { h: 48, px: 26, fs: 14, gap: 10, icon: 18 },
  lg: { h: 58, px: 34, fs: 15, gap: 12, icon: 20 },
};

export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth = false, disabled = false, href, children, style, onClick, type = 'button', ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: { bg: 'var(--action-primary)', bgH: 'var(--action-primary-hover)', bgP: 'var(--action-primary-press)', fg: 'var(--text-on-brand)', bd: 'transparent' },
    secondary: { bg: 'var(--surface-raised)', bgH: 'var(--sand-100)', bgP: 'var(--sand-200)', fg: 'var(--summit-800)', bd: 'var(--border-default)' },
    outline: { bg: 'transparent', bgH: 'rgba(122,148,157,.08)', bgP: 'rgba(122,148,157,.16)', fg: 'var(--summit-700)', bd: 'var(--summit-400)' },
    ghost: { bg: 'transparent', bgH: 'rgba(122,148,157,.10)', bgP: 'rgba(122,148,157,.18)', fg: 'var(--summit-700)', bd: 'transparent' },
    cream: { bg: 'var(--wd-fresh-cream)', bgH: 'var(--white)', bgP: 'var(--sand-100)', fg: 'var(--summit-800)', bd: 'transparent' },
    link: { bg: 'transparent', bgH: 'transparent', bgP: 'transparent', fg: 'var(--summit-700)', bd: 'transparent' },
  }[variant] || {};
  const isLink = variant === 'link';
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: isLink ? 'auto' : s.h, padding: isLink ? 0 : `0 ${s.px}px`,
    borderRadius: 'var(--radius-button)', border: `1px solid ${V.bd}`,
    background: press ? V.bgP : hover ? V.bgH : V.bg, color: V.fg,
    fontFamily: 'var(--type-ui)', fontSize: s.fs, fontWeight: 600, letterSpacing: '0.04em',
    textDecoration: isLink && hover ? 'underline' : 'none', textUnderlineOffset: 4,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    transform: press && !isLink ? 'scale(0.98)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    boxShadow: variant === 'primary' && hover && !disabled ? 'var(--shadow-md)' : 'none',
    whiteSpace: 'nowrap', boxSizing: 'border-box', outline: 'none', ...style,
  };
  const Tag = href ? 'a' : 'button';
  const arrowShift = { transform: hover && !disabled ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)', display: 'inline-flex' };
  return (
    <Tag href={href} type={href ? undefined : type} disabled={href ? undefined : disabled} onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      onFocus={(e) => { e.currentTarget.style.boxShadow = 'var(--focus-ring)'; }} onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      style={css} {...rest}>
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <span style={arrowShift}><Icon name={iconRight} size={s.icon} /></span>}
    </Tag>
  );
}
