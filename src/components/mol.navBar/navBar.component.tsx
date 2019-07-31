import { AppBar, Button, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons/';
import React from 'react';
import { ButtonsWrapper, IconWrapper, StyledToolBar } from './navBar.style';

type NavBarProps = {
  handleAccountClick: (event: any) => void;
  handleWalletClick: (event: any) => void;
  handleHistoryClick: (event: any) => void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <AppBar position={'static'}>
    <StyledToolBar>
      <IconWrapper>
        <IconButton color={'secondary'} onClick={props.handleAccountClick}>
          <AccountCircle />
        </IconButton>
      </IconWrapper>
      <ButtonsWrapper>
        <Button color={'secondary'} onClick={props.handleWalletClick}>
          Carteira
        </Button>
        <Button color={'secondary'} onClick={props.handleHistoryClick}>
          Extrato
        </Button>
      </ButtonsWrapper>
    </StyledToolBar>
  </AppBar>
);

export default NavBar;
