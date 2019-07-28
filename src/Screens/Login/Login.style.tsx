import styled from "styled-components";
import { Spacing, Color } from "../../utils/Constants";

export const StyledLogin = styled.div`
    position: fixed;
    top: inherit;
    left: inherit;
    padding-left: 9.5rem;
    display: inline-block;
    text-align: right;
    margin-top: .5rem;
    padding-right: .5rem;
    height: inherit;
    width: 10rem;
    color: white;
`

export const EntryInput = styled.input`
    position: relative;
    display: block;
    right: 3.2rem;
    border: none;
    padding: .1rem;
    margin-bottom: .5rem;
    width: 13rem;
    height: 1rem;
    background-color: inherit;
    border-bottom: 2px solid white;
    outline: none;
    color: white;
`

export const Button = styled.button`
    background-color: white;
    font-weight: 700;
    border-radius: 1rem;
    border: none;
    position: relative;
    top: .5rem;
    padding: .3rem;
    width: 10rem;
    cursor: pointer;
    outline: none;
`