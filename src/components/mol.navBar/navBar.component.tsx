import { AppBar, Button } from '@material-ui/core';
import React from 'react';
import { ButtonsWrapper, StyledToolBar } from './navBar.style';

type NavBarProps = {
  handleAccountClick: (event: any) => void;
  handleWalletClick: (event: any) => void;
  handleHistoryClick: (event: any) => void;
  handleExitClick: (event: any) => void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <AppBar position={'static'}>
    <StyledToolBar>
      <ButtonsWrapper>
        <Button color={'secondary'} onClick={props.handleWalletClick}>
          Carteira
        </Button>
        <Button color={'secondary'} onClick={props.handleHistoryClick}>
          Extrato
        </Button>

        <Button color={'secondary'} onClick={props.handleExitClick}>
          Sair
        </Button>
      </ButtonsWrapper>
    </StyledToolBar>
  </AppBar>
);

export default NavBar;
