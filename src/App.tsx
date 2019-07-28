import React, { Component } from "react";
import NavBar from "./components/mol.navBar/navBar.component";
import UserPanel from "./Screens/UserPanel/UserPanel";
import Portfolio from "./Screens/Portfolio/Portfolio";
import History from "./Screens/History/History";
import Marketplace from "./Screens/Marketplace/Marketplace";
import Login from "./Screens/Login/Login";
import "./App.css";
import GlobalThemeProvider from "./components/atm.global-theme-provider/global-theme-provider.component";

export enum AppScreen {
  USER_PANEL,
  PORTFOLIO,
  HISTORY,
  MARKETPLACE
}

type AppState = {
  activeTab: AppScreen;
};

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      activeTab: AppScreen.USER_PANEL
    };
  }

  changeTab(tab: AppScreen) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <GlobalThemeProvider>
        <NavBar activeTab={this.state.activeTab} changeTab={this.changeTab} />
        <Login />
        {this.state.activeTab === AppScreen.USER_PANEL && <UserPanel />}
        {this.state.activeTab === AppScreen.PORTFOLIO && <Portfolio />}
        {this.state.activeTab === AppScreen.HISTORY && <History />}
        {this.state.activeTab === AppScreen.MARKETPLACE && <Marketplace />}
      </GlobalThemeProvider>
    );
  }
}

export default App;
