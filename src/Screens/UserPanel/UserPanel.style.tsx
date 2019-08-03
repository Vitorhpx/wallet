import styled from 'styled-components';
import { Spacing, Color } from '../../utils/Constants';

export const StyledUserPanel = styled.div`
    position: relative
    width: 50%;
    min-height: 15rem;
    left: 22.5%;
    top: ${Spacing.XLarge};
    padding: ${Spacing.XXLarge} ${Spacing.XXLarge};
    background-color: white;
    color: black;
    border: 1px solid ${Color.gray};
    border-radius: ${Spacing.XLarge};
    box-shadow: 0 .5rem 2rem 1px ${Color.secondary};
`;

export const StyledAccountInfo = styled.div`
  position: relative;
  float: right;
  display: block;
  margin-left: ${Spacing.Large};
`;

export const StyledSideBar = styled.ul`
  list-style-type: none;
  display: block;
  float: left;
  margin-right: ${Spacing.Large};
`;

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
`;

export const BankList = styled.ul`
  list-style-type: none;
  display: inline;
`;

export const Bank = styled.li`
    display: block;
    position: relative;
    float: right
    margin-top: ${Spacing.Small}
`;

export const IntegrateButton = styled.ul`
  display: block;
  position: relative;
  float: right;
  color: ${Color.primary};
  background-color: white;
  border: 1px solid ${Color.primary};
  padding: 0 ${Spacing.Small};
  border-radius: ${Spacing.XXLarge};
`;
