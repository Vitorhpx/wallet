import React from 'react';
import { AppBar, Button, IconButton } from '@material-ui/core';
import { AppScreen } from '../../App';
import { StyledToolBar, IconWrapper, ButtonsWrapper } from './navBar.style';
import { AccountCircle } from '@material-ui/icons/';
import { AppPaths } from '../../utils/AppPaths';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <AppBar position={'static'}>
    <StyledToolBar>
      <IconWrapper>
        <IconButton color={'secondary'}>
          <AccountCircle />
        </IconButton>
      </IconWrapper>
      <ButtonsWrapper>
        <Button color={'secondary'} href={AppPaths.wallet.path}>
          Carteira
        </Button>
        <Button color={'secondary'} href={AppPaths.history.path}>
          Extrato
        </Button>
      </ButtonsWrapper>
    </StyledToolBar>
  </AppBar>
);

export default NavBar;
