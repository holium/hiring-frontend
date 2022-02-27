import { lighten, darken, rgba } from "polished";

export const fonts = {
  body: '"Inter", sans-serif',
  heading: "Oxanium",
  monospace: "Source Code Pro, monospace",
};

export const fontByName = {
  Rubik: '"Rubik", sans-serif',
  Oxanium: "Oxanium",
  "Source Code Pro": "Source Code Pro, monospace",
  Inter: "Inter, sans-serif",
};

export const fontSizes = [
  "0.702rem", // 0
  "0.79rem", //  1
  "0.889rem", // 2
  "1rem", //     3
  "1.125rem", // 4
  "1.266rem", // 5
  "1.424rem", // 6
  "1.602rem", // 7
  "1.802rem", // 8
  "2.027rem", // 9
  "2.281rem", // 10
];

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const lineHeights = {
  solid: "1rem",
  title: "1.25rem",
  copy: "1.5rem",
};

export const letterSpacings = {
  default: "normal",
  tracked: "0.04em",
};

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];

export const breakpoints = ["40em", "56em", "64em"];

export const transition = "0.2s ease";
export const transitionFast = "0.05s ease";

export const input = {
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: 6,
};

export const elevations = {
  none: "none",
  one: "0px 0px 4px rgba(0, 0, 0, 0.06)",
  two: "0px 0px 9px rgba(0, 0, 0, 0.12)",
  three: "0px 0px 9px rgba(0, 0, 0, 0.18)",
};

export const containers = {
  rounderBorderRadius: 9,
  outerBorderRadius: 6,
  innerBorderRadius: 3,
};

// TODO restructure to generate type in an elegant way
export const theme = {
  light: {
    space,
    sizes,
    elevations,
    fonts,
    fontByName,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    transition,
    transitionFast,
    input,
    containers,
    colors: {
      brand: {
        primary: "#4E9EFD",
        secondary: "#EF9134",
        neutral: "#333333",
        accent: "#DB7C00",
        muted: rgba("#4E9EFD", 0.2),
      },
      ui: {
        primary: "#262626",
        secondary: "#757575",
        tertiary: "#F1F1F2",
        quaternary: "#FFFFFF",
        disabled: "#DEDEDE",
        intent: {
          info: "#97A3B2",
          success: "#0FC383",
          caution: "#FFBC32",
          alert: "#F93939",
        },
        borderColor: "rgba(0, 0, 0, 0.1)", // #e3e3e3
        input: {
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderHover: "rgba(0, 0, 0, 0.2)",
        },
      },
      os: {
        tray: "rgba(0, 0, 0, 0.05)",
        base: "#000000",
      },
      bg: {
        primary: "#F6F6F6",
        secondary: "#FFFFFF",
        divider: "#EBEBEB",
      },
      icon: {
        app: "#85898E",
      },
      text: {
        primary: "#333333",
        secondary: "#757575",
        tertiary: "#5D6064",
        disabled: "#9C9C9C",
        placeholder: "rgba(0, 0, 0, 0.5)",
        white: "#FFFFFF",
        inverse: "#FFFFFF",
        error: "#D0421B",
        success: "#138000",
      },
      highlights: {
        primaryHighlight: darken(0.05, "#4E9EFD"),
        primaryExtraHighlight: darken(0.1, "#4E9EFD"),
        bgHighlight: darken(0.075, "#FFFFFF"),
      },
    },
  },
  dark: {
    space,
    sizes,
    elevations,
    fonts,
    fontByName,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    transition,
    transitionFast,
    input,
    containers,
    colors: {
      brand: {
        primary: "#4E9EFD",
        secondary: "#EF9134",
        accent: "#FDB447",
        muted: rgba("#4E9EFD", 0.2),
      },
      ui: {
        primary: "#FFFFFF",
        secondary: "#A1A1A1",
        tertiary: "#2A3843",
        quaternary: "#24313B",
        disabled: "#25343F",
        intent: {
          info: "#97A3B2",
          success: "#0FC383",
          caution: "#FFBC32",
          alert: "#F93939",
        },
        borderColor: "rgba(0, 0, 0, 0.1)",
        input: {
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderHover: "rgba(0, 0, 0, 0.2)",
        },
      },
      os: {
        tray: "rgba(255, 255, 255, 0.05)",
        base: "#FFFFFF",
      },
      bg: {
        primary: "#2A3843",
        secondary: "#212D36",
        divider: darken(0.05, "#1A2329"),
      },
      icon: {
        app: "#A2A8AC90",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#A0A9B0",
        tertiary: "#C1C7CC",
        disabled: "#868E94",
        placeholder: "rgba(255, 255, 255, 0.5)",
        inverse: "#262626",
        white: "#FFFFFF",
        error: "#FF4D4D",
        success: "#1CBD00",
      },
      highlights: {
        primaryHighlight: lighten(0.05, "#4E9EFD"),
        primaryExtraHighlight: lighten(0.1, "#4E9EFD"),
        bgHighlight: darken(0.01, "#212D36"),
      },
    },
  },
};

export type ThemeType = typeof theme.light;

export default theme;
