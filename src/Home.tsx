import * as React from "react";
import NavBar from "./components/mol.navBar/navBar.component";
import History from "./Screens/History/History";
import Portfolio from "./Screens/Portfolio/Portfolio";
import { AppPaths } from "./utils/AppPaths";

interface IHomeProps {}

enum Screens {
  history,
  wallet
}

const handleExitClick = () => {
  sessionStorage.clear();
  window.location.replace(AppPaths.loginPage.path);
};

const Home: React.FunctionComponent<IHomeProps> = props => {
  const [activeScreen, setActiveScreen] = React.useState(Screens.wallet);
  return (
    <>
      <NavBar
        handleAccountClick={() => setActiveScreen(Screens.history)}
        handleWalletClick={() => setActiveScreen(Screens.wallet)}
        handleHistoryClick={() => setActiveScreen(Screens.history)}
        handleExitClick={handleExitClick}
      />
      {activeScreen === Screens.history && <History />}
      {activeScreen === Screens.wallet && <Portfolio />}
    </>
  );
};

export default Home;
