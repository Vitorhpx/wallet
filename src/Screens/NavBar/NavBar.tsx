import React, {Component} from 'react';
import {AppScreen} from '../../App';
import './NavBar.css'

type NavBarProps = {
    activeTab: AppScreen;
    changeTab(tab: AppScreen): void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
    <div id='NavBar'>
        <ul>
            <li
                className={ props.activeTab === AppScreen.USER_PANEL ? 'ActiveTab' : 'Tab' }
                onClick={() => props.changeTab(AppScreen.USER_PANEL)}
            >
                User
            </li>
            <li
                className={ props.activeTab === AppScreen.PORTFOLIO ? 'ActiveTab' : 'Tab' }
                onClick={() => props.changeTab(AppScreen.PORTFOLIO)}
            >
                Portfolio
            </li>
            <li
                className={ props.activeTab === AppScreen.HISTORY ? 'ActiveTab' : 'Tab' }
                onClick={() => props.changeTab(AppScreen.HISTORY)}
            >
                History
            </li>
            <li
                className={ props.activeTab === AppScreen.MARKETPLACE ? 'ActiveTab' : 'Tab' }
                onClick={() => props.changeTab(AppScreen.MARKETPLACE)}
            >
                Marketplace
            </li>
        </ul>
    </div>
)

export default NavBar;