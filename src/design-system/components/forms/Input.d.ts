import type { CSSProperties, ChangeEventHandler } from 'react';

/** Single-line text field with uppercase label, optional leading icon, hint and error. */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message; turns border red */
  error?: string;
  /** Leading icon name, e.g. "phone", "mail", "calendar" */
  icon?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  style?: CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
