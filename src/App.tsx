import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppPaths } from "../src/utils/AppPaths";
import "./App.css";
import GlobalThemeProvider from "./components/atm.global-theme-provider/global-theme-provider.component";
import AuthRedirect from "./containers/auth-redirect/auth-redirect.container";
import Home from "./Home";
import LoginPage from "./LoginPage";
import { AUTH_TOKEN } from "./utils/API";

export enum AppScreen {
  USER_PANEL,
  PORTFOLIO,
  HISTORY
}

type AppState = {
  activeTab: AppScreen;
};

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
    <Router>
      <GlobalThemeProvider>
        <AuthRedirect
          isAutenticated={sessionStorage.getItem(AUTH_TOKEN) !== null}
          authenticatedTo={AppPaths.home.path}
          notAuthenticatedTo={AppPaths.loginPage.path}
        />
        <Route path={AppPaths.loginPage.path} exact component={LoginPage} />
        <Route path={AppPaths.home.path} component={Home} />
      </GlobalThemeProvider>
    </Router>
  );
};

export default App;
