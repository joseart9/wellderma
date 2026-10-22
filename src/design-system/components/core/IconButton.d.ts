import type { CSSProperties, MouseEventHandler } from 'react';

/** Circular icon-only button (carousel arrows, social links, close). */
export interface IconButtonProps {
  /** Icon name from the Icon set */
  icon: string;
  /** Accessible label (required) */
  label: string;
  variant?: 'outline' | 'solid' | 'cream' | 'ghost';
  /** Diameter in px. Default 44 */
  size?: number;
  href?: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
