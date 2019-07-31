import * as React from 'react';
import Login from '../src/Screens/Login/Login';
import SignUp from '../src/Screens/SignUp/SignUp';

interface ILoginPageProps {}

enum Screens {
  Login,
  SignUp
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
  const [activeScreen, setActiveScreen] = React.useState(Screens.Login);
  return (
    <>
      {activeScreen === Screens.Login && (
        <Login handleSignUpClick={() => setActiveScreen(Screens.SignUp)} />
      )}
      {activeScreen === Screens.SignUp && (
        <SignUp handleSignInClick={() => setActiveScreen(Screens.Login)} />
      )}
    </>
  );
};

export default LoginPage;
