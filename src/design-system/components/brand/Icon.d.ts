import type { CSSProperties } from 'react';

/** Lucide line icon, inlined. Default stroke 1.5 to match the light Raleway texture. */
export interface IconProps {
  /** arrow-right, arrow-up-right, arrow-left, chevron-down/left/right, menu, x, phone, map-pin, clock, calendar, mail, instagram, facebook, message-circle, star, sparkles, syringe, droplet, droplets, shield-check, stethoscope, graduation-cap, award, heart-handshake, leaf, check, plus, minus, zoom-in, image, user, quote, navigation, pill, flask-conical, sun, waves */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  title?: string;
  style?: CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const ICON_NAMES: string[];
