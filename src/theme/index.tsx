import { ReactNode } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
// hooks
//
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const isLight = "light";

  const themeOptions: ThemeOptions = {
    palette: isLight ? palette.light : palette.dark,
    breakpoints,typography,
    shape: { borderRadius: 8 },
    direction: "ltr",
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
