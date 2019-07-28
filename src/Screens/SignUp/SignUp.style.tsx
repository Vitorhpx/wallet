import styled from "styled-components";
import { Spacing, Color } from "../../utils/Constants";

export const StyledSignUp = styled.div`
    position: fixed;
    top: inherit;
    left: inherit;
    margin-left: 20rem;
    margin-top: .5rem;
    display: inline-block;
    text-align: left;
    box-align: left;
    padding-left: .5rem;
    border-left: 1px solid white;
    height: inherit;
    width: 10rem;
    color: white;
`

export const EntryInput = styled.input`
    position: relative;
    display: block;
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