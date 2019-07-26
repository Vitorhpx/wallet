import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

interface IThemeProviderProps {}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#bbdefb'
    }
  }
});

const GlobalThemeProvider: React.FunctionComponent<
  IThemeProviderProps
> = props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;

export default GlobalThemeProvider;
