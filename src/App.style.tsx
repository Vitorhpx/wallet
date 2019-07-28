import styled from "styled-components";
import { Color } from "./utils/Constants";

export const EntryContainer = styled.div`
  font-family: Roboto;
  position: fixed;
  display: block;
  top: 6rem;
  left: 28%;
  width: 40rem;
  height: 20rem;
  border: none;
  border-radius: 15rem;
  padding: 0.5rem;
  background-image: -webkit-linear-gradient(
    left,
    ${Color.primaryLight} -30%,
    ${Color.primaryDark} 130%
  );
  box-shadow: 0 0.5rem 2rem 0.5rem ${Color.secondary};
`;

export const ActiveScreen = styled.div`
  font-family: Roboto;
  background-image: -webkit-linear-gradient(
    top,
    ${Color.secondaryLight} -100%,
    ${Color.white} 200%
  );
  min-height: 43rem;
`;
