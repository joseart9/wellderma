import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export const fieldLabelStyle = { fontFamily: 'var(--type-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--summit-700)' };
export const fieldBoxStyle = (focus, error, disabled) => ({
  display: 'flex', alignItems: 'center', gap: 10, minHeight: 50, padding: '0 16px', boxSizing: 'border-box',
  background: disabled ? 'var(--sand-100)' : 'var(--surface-raised)', borderRadius: 'var(--radius-input)',
  border: `1px solid ${error ? 'var(--error)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
  boxShadow: focus ? (error ? '0 0 0 3px rgba(168,73,61,.18)' : 'var(--focus-ring)') : 'none',
  transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)', color: 'var(--summit-500)', opacity: disabled ? 0.6 : 1,
});
export const fieldInputStyle = { flex: 1, minWidth: 0, border: 0, outline: 0, background: 'transparent', fontFamily: 'var(--type-body)', fontSize: 15, color: 'var(--text-strong)', height: 48, padding: 0, fontVariantNumeric: 'lining-nums' };
export const fieldHintStyle = (error) => ({ fontSize: 12, color: error ? 'var(--error)' : 'var(--text-muted)', lineHeight: 1.4 });

export function Input({ label, hint, error, icon, value, defaultValue, onChange, placeholder, type = 'text', disabled, name, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || name;
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && <span style={fieldLabelStyle}>{label}</span>}
      <span style={fieldBoxStyle(focus, !!error, disabled)}>
        {icon && <Icon name={icon} size={18} />}
        <input id={fid} name={name} type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={fieldInputStyle} {...rest} />
      </span>
      {(error || hint) && <span style={fieldHintStyle(!!error)}>{error || hint}</span>}
    </label>
  );
}
