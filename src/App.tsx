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
	  sessionToken: string
};

class App extends Component<{}, AppState> {
	constructor(props: object) {
		super(props);
		this.changeTab = this.changeTab.bind(this);
		this.setSessionToken = this.setSessionToken.bind(this);
		this.state = {
			activeTab: AppScreen.USER_PANEL,
			sessionToken: ''
		};
	}

	changeTab(tab: AppScreen) {
		this.setState({ activeTab: tab });
	}

	setSessionToken(sessionToken: string){
		this.setState({sessionToken});
	}

	logOut(){
		this.setState({sessionToken: ''});
	}

	render() {
		return (
			<GlobalThemeProvider>
				{this.state.sessionToken === '' ?
					<EntryContainer>
						<Login
							setSessionToken={(sessionToken: string) => this.setSessionToken(sessionToken) }
						/>
						<SignUp/>
					</EntryContainer>
				:
					<>
						<NavBar
							activeTab={this.state.activeTab}
							changeTab={this.changeTab}
						/>
						<ActiveScreen>
							{this.state.activeTab === AppScreen.USER_PANEL &&
								<UserPanel
									logOut={() => this.logOut()}
								/>}
							{this.state.activeTab === AppScreen.PORTFOLIO && <Portfolio />}
							{this.state.activeTab === AppScreen.HISTORY && <History />}
							{this.state.activeTab === AppScreen.MARKETPLACE && <Marketplace />}
						</ActiveScreen>
					</>
				}
			</GlobalThemeProvider>
		);
	}
}

export default App;
