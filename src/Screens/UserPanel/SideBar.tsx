import React, {Component} from 'react';
import {UserMenu} from './UserPanel';
import {StyledSideBar, SideBarButton} from './UserPanel.style';

type SideBarProps = {
    setActiveMenu: (activeBar: UserMenu) => void;
    logOut: () => void;
}

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => (
    <StyledSideBar>
        <li>
            <SideBarButton
                onClick={() => props.setActiveMenu(UserMenu.ACCOUNT)}
            >
                Minha conta
            </SideBarButton>
        </li>
        <li>
            <SideBarButton
                onClick={() => props.setActiveMenu(UserMenu.SUITABILITY)}
            >
                Suitability
            </SideBarButton>
        </li>
        <li>
            <SideBarButton
                onClick={() => props.logOut()}
            >
                Log out
            </SideBarButton>
        </li>
    </StyledSideBar>
)

export default SideBar;