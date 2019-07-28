import React, {Component} from 'react';
import SideBar from './SideBar';
import AccountInfo from './AccountInfo';
import AccountMenu from './AccountMenu';
import SuitabilityTest from './SuitabilityTest';
import {StyledUserPanel} from './UserPanel.style';

export enum UserMenu {
    SUITABILITY,
    ACCOUNT
} 

type UserPanelState = {
    activeMenu: UserMenu;
}

type UserPanelProps = {
    logOut: () => void;
}

class UserPanel extends Component <UserPanelProps, UserPanelState>{
    constructor(props: UserPanelProps){
        super(props);
        this.setActiveMenu = this.setActiveMenu.bind(this);
        this.state = {
            activeMenu: UserMenu.ACCOUNT
        }
    }

    setActiveMenu(activeMenu: UserMenu){
        this.setState({activeMenu});
    }

    render(){
        return(
            <StyledUserPanel>
                <AccountInfo/>
                <SideBar
                    setActiveMenu={(activeMenu: UserMenu) => this.setActiveMenu(activeMenu)}
                    logOut={() => this.props.logOut()}
                />
                {this.state.activeMenu === UserMenu.ACCOUNT && <AccountMenu/>}
                {this.state.activeMenu === UserMenu.SUITABILITY && <SuitabilityTest/>}
            </StyledUserPanel>
        )
    }
}

export default UserPanel;