// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black?: string;
    blueGradient?: string;
    darkYellow?: string;
    gray?: string;
    grayGradient?: string;
    icon?: string;
    lightBlue?: string;
    lightGray?: string;
    link?: string;
    text?: {
      primary?: string;
      secondary?: string;
    };
    white?: string;
    yellowBlueGradient?: string;
    blue?: string;
  }
  interface PaletteOptions {
    black?: string;
    blueGradient?: string;
    darkYellow?: string;
    gray?: string;
    grayGradient?: string;
    icon?: string;
    lightBlue?: string;
    lightGray?: string;
    link?: string;
    text?: {
      primary?: string;
      secondary?: string;
    };
    white?: string;
    yellowBlueGradient?: string;
    blue?: string;
  }
}
