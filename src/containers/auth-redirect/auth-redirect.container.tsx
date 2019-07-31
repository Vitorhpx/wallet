import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface IAuthRedirectProps {
  isAutenticated: boolean;
  authenticatedTo: string;
  notAuthenticatedTo: string;
}

const AuthRedirect: React.FunctionComponent<IAuthRedirectProps> = props => {
  const [isAutenticated, setIsAutenticated] = React.useState(
    props.isAutenticated
  );

  React.useEffect(() => {
    setIsAutenticated(props.isAutenticated);
  }, [props.isAutenticated]);
  return (
    <>
      {isAutenticated ? (
        <Redirect to={props.authenticatedTo} />
      ) : (
        <Redirect to={props.notAuthenticatedTo} />
      )}
    </>
  );
};

export default AuthRedirect;
