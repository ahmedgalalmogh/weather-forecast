import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

declare module "@mui/material" {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: "#5F84E2",
  light: "#2F4FA2",
  main: "#3E5DA6",
  dark: "#19398C",
  darker: "#2F4FA2",
};
const SECONDARY = {
  lighter: "#F4816C",
  light: "#F07761",
  main: "#F15651",
  dark: "#F2323F",
  darker: "#F02734",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: "#212B36" },
  warning: { ...WARNING, contrastText: "#212B36" },
  error: { ...ERROR, contrastText: "#fff" },
  divider: "#919EAB",
  action: {
    hover: alpha("#919EAB", 0.08),
    selected: alpha("#919EAB", 0.16),
    disabled: alpha("#919EAB", 0.8),
    disabledBackground: alpha("#919EAB", 0.24),
    focus: alpha("#919EAB", 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    text: {
      primary: "#212B36",
      secondary: "#637381",
      disabled: "#919EAB",
    },
    background: {
      paper: "#fff",
      default: "#F4F6FA",
      defaultGrey: "#FFF",
      neutral: "#F4F6FA",
    },
    action: { active: "#637381", ...COMMON.action },
  },
  dark: {
    ...COMMON,
    text: { primary: "#fff", secondary: "#FFF", disabled: "#919EAB" },
    background: {
      paper: "#212B36",
      default: "#000",
      defaultGrey: "#191A1C",
      neutral: "#2B2D30",
    },
    action: { active: "#919EAB", ...COMMON.action },
  },
} as const;

export default palette;
