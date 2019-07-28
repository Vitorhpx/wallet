import React from "react";
import { UserMenu } from "./UserPanel";
import { StyledSideBar, SideBarButton } from "./UserPanel.style";

type SideBarProps = {
  setActiveMenu: (activeBar: UserMenu) => void;
};

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => (
  <StyledSideBar>
    <li>
      <SideBarButton onClick={() => props.setActiveMenu(UserMenu.ACCOUNT)}>
        Account
      </SideBarButton>
    </li>
    <li>
      <SideBarButton onClick={() => props.setActiveMenu(UserMenu.SUITABILITY)}>
        Suitability
      </SideBarButton>
    </li>
  </StyledSideBar>
);

export default SideBar;
