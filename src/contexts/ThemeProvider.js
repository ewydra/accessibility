import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { defaultTheme, highContrastTheme } from "../theme";
import { useContrastMode } from "./ContrastContext";

export function ThemeProvider({ children }) {
  const { isHighContrastMode } = useContrastMode();
  const theme = isHighContrastMode ? highContrastTheme : defaultTheme;

  return <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>;
}
