import React from "react";
import { AppBar, Button, IconButton } from "@material-ui/core";
import { AppScreen } from "../../App";
import { StyledToolBar, IconWrapper, ButtonsWrapper } from "./navBar.style";
import { AccountCircle } from "@material-ui/icons/";

type NavBarProps = {
  activeTab: AppScreen;
  changeTab(tab: AppScreen): void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <AppBar position={"static"}>
    <StyledToolBar>
      <IconWrapper>
        <IconButton
          color={"secondary"}
          onClick={() => props.changeTab(AppScreen.USER_PANEL)}
        >
          <AccountCircle />
        </IconButton>
      </IconWrapper>
      <ButtonsWrapper>
        <Button
          color={"secondary"}
          onClick={() => props.changeTab(AppScreen.PORTFOLIO)}
        >
          Carteira
        </Button>
        <Button
          color={"secondary"}
          onClick={() => props.changeTab(AppScreen.HISTORY)}
        >
          Extrato
        </Button>
      </ButtonsWrapper>
    </StyledToolBar>
  </AppBar>
);

export default NavBar;
