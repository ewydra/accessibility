const breakpoints = {
  xs: "320px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1920px",
};

export const theme = {
  colors: {
    text: "#111212",
    background: "#fff",
    primary: "#303f9f",
    secondary: "#ef5350",
    white: "#FFF",
  },
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
