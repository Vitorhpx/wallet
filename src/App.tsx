import React, { Component } from "react";
import NavBar from "./components/mol.navBar/navBar.component";
import UserPanel from "./Screens/UserPanel/UserPanel";
import Portfolio from "./Screens/Portfolio/Portfolio";
import History from "./Screens/History/History";
import Marketplace from "./Screens/Marketplace/Marketplace";
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/SignUp/SignUp"
import { EntryContainer, ActiveScreen } from './App.style'
import GlobalThemeProvider from "./components/atm.global-theme-provider/global-theme-provider.component";
import "./App.css";

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
				<NavBar
					activeTab={this.state.activeTab}
					changeTab={this.changeTab}
				/>
				{this.state.activeTab !== AppScreen.USER_PANEL && <EntryContainer>
					<Login />
					<SignUp/>
				</EntryContainer>}
				<ActiveScreen>
					{this.state.activeTab === AppScreen.USER_PANEL && <UserPanel />}
					{this.state.activeTab === AppScreen.PORTFOLIO && <Portfolio />}
					{this.state.activeTab === AppScreen.HISTORY && <History />}
					{this.state.activeTab === AppScreen.MARKETPLACE && <Marketplace />}
				</ActiveScreen>
			</GlobalThemeProvider>
		);
	}
}

export default App;
