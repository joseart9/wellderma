import type { CSSProperties } from 'react';

/** Official Well Derma logo, rendered from the vector paths in the brand artwork. */
export interface LogoProps {
  /** vertical = isotype over wordmark; stacked = isotype + two-line wordmark; horizontal = one line; isotype = symbol only */
  variant?: 'vertical' | 'stacked' | 'horizontal' | 'isotype';
  /** summit (on cream/light) · cream (on Summit or photos) · ink */
  tone?: 'summit' | 'cream' | 'ink';
  /** Height in px; width follows the artwork ratio */
  height?: number;
  /** Overrides tone */
  color?: string;
  title?: string;
  style?: CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
