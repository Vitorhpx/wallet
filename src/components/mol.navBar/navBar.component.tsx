import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { AppScreen } from "../../App";
import { StyledToolBar } from "./navBar.style";

type NavBarProps = {
  activeTab: AppScreen;
  changeTab(tab: AppScreen): void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <AppBar position={"static"}>
    <StyledToolBar>
      <Button
        variant="text"
        color={"secondary"}
        onClick={() => props.changeTab(AppScreen.USER_PANEL)}
      >
        User
      </Button>
      <Button
        color={"secondary"}
        onClick={() => props.changeTab(AppScreen.PORTFOLIO)}
      >
        Portfolio
      </Button>
      <Button
        color={"secondary"}
        onClick={() => props.changeTab(AppScreen.HISTORY)}
      >
        History
      </Button>
      <Button
        color={"secondary"}
        onClick={() => props.changeTab(AppScreen.MARKETPLACE)}
      >
        Marketplace
      </Button>
    </StyledToolBar>
  </AppBar>
);

export default NavBar;
