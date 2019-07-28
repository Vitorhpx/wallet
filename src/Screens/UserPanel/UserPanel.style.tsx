import styled from "styled-components";
import { Spacing, Color } from "../../utils/Constants";

export const StyledUserPanel = styled.div`
    position: relative
    width: 50%;
    left: 25%;
    padding: ${Spacing.XXLarge} ${Spacing.Large};
    background-color: ${Color.secondary}
    color: black
`

export const StyledAccountInfo = styled.div`
    position: relative;
    float: right;
    display: block;
    margin-left: ${Spacing.Large}
`

export const StyledSideBar = styled.ul`
    list-style-type: none;
    display: block;
    float: left;
    margin-right: ${Spacing.Large}
`

export const SideBarButton = styled.button`
    position: relative;
    float: right;
    border: 0;
    border-top: 1px solid ${Color.secondaryDark}
    border-bottom: 1px solid ${Color.secondaryDark}
    padding: ${Spacing.Small};
    width: 5rem;
    background-color: inherit;
    cursor: pointer;
    outline: none;
`

export const BankList = styled.ul`
    list-style-type: none;
    display: inline;
`

export const Bank = styled.ul`
    display: block;
    position: relative;
    float: right;
    color: ${Color.secondaryDark}
`

export const IntegrateButton = styled.ul`
`