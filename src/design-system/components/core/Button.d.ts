import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';

/**
 * Pill-shaped call to action. Primary = Summit-600 fill with Fresh Cream text.
 * @startingPoint section="Core" subtitle="Pill buttons: primary, secondary, outline, ghost, cream, link" viewport="700x320"
 */
export interface ButtonProps {
  /** Visual style. `cream` is for use on Summit / photo backgrounds. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cream' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Icon name from the Icon set (Lucide), e.g. "calendar" */
  iconLeft?: string;
  /** Usually "arrow-right"; nudges right on hover */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a> when provided */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
