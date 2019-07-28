import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Color } from "../../utils/Constants";

interface IThemeProviderProps {}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.primary
    },
    secondary: {
      main: Color.secondary
    }
  }
});

const GlobalThemeProvider: React.FunctionComponent<
  IThemeProviderProps
> = props => (
  <ThemeProvider theme={theme}>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
    />
    {props.children}
  </ThemeProvider>
);

export default GlobalThemeProvider;
