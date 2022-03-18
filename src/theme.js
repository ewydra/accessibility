const breakpoints = {
  xs: "320px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1920px",
};

const themeFields = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
  },
  breakpoints,
  mediaQueries: {
    mobile: `@media screen and (min-width: ${breakpoints.xs})`,
    tablet: `@media screen and (min-width: ${breakpoints.sm})`,
    computer: `@media screen and (min-width: ${breakpoints.md})`,
    desktop: `@media screen and (min-width: ${breakpoints.lg})`,
    widescreen: `@media screen and (min-width: ${breakpoints.xl})`,
  },
};

export const defaultTheme = {
  mode: "default",
  colors: {
    text: "#383838",
    background: "#fff",
    primary: {
      main: "#7DA68C",
      text: "#fff",
    },
    navbar: "#E3F1E8",
    border: "#e8e8e8",
    white: "#fff",
  },
  ...themeFields,
};

export const highContrastTheme = {
  mode: "highContrast",
  colors: {
    text: "#fff",
    background: "#202020",
    primary: {
      main: "#FFFF00",
      text: "#000",
    },
    secondary: "#04FEFF",
    navbar: "#000",
    border: "#202020",
    white: "#fff",
  },
  ...themeFields,
};
