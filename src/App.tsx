import React, { Component } from 'react';
import NavBar from './components/mol.navBar/navBar.component';
import UserPanel from './Screens/UserPanel/UserPanel';
import Portfolio from './Screens/Portfolio/Portfolio';
import History from './Screens/History/History';
import Marketplace from './Screens/Marketplace/Marketplace';
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import { EntryContainer, ActiveScreen } from './App.style';
import GlobalThemeProvider from './components/atm.global-theme-provider/global-theme-provider.component';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppPaths } from '../src/utils/AppPaths';

export enum AppScreen {
  USER_PANEL,
  PORTFOLIO,
  HISTORY
}

type AppState = {
  activeTab: AppScreen;
};

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      activeTab: AppScreen.PORTFOLIO
    };
  }

  changeTab(tab: AppScreen) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <Router>
        <GlobalThemeProvider>
          <NavBar />
          <Route path={AppPaths.login.path} exact component={Login} />
          <Route path={AppPaths.signup.path} component={SignUp} />
          <Route path={AppPaths.wallet.path} component={Portfolio} />
        </GlobalThemeProvider>
      </Router>
    );
  }
}

export default App;
