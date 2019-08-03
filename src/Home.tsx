import * as React from 'react';
import NavBar from './components/mol.navBar/navBar.component';
import History from './Screens/History/History';
import Portfolio from './Screens/Portfolio/Portfolio';
import { AppPaths } from './utils/AppPaths';
import Suitability from './Screens/UserPanel/Suitability';

interface IHomeProps {}

enum Screens {
  history,
  wallet,
  suitability
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
        handleAccountClick={() => setActiveScreen(Screens.suitability)}
        handleWalletClick={() => setActiveScreen(Screens.wallet)}
        handleHistoryClick={() => setActiveScreen(Screens.history)}
        handleExitClick={handleExitClick}
      />
      {activeScreen === Screens.history && <History />}
      {activeScreen === Screens.wallet && <Portfolio />}
      {activeScreen === Screens.suitability && <Suitability />}
    </>
  );
};

export default Home;
