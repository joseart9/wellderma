import type { ReactNode, CSSProperties } from 'react';

/** Modal overlay. `panel` = cream sheet for the booking form; `media` = dark lightbox for gallery photos. Closes on Esc / scrim click. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  /** Max width for panel variant. Default 520 */
  width?: number;
  variant?: 'panel' | 'media';
  style?: CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
