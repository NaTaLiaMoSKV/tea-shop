import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)` 
    display: inline-block;
    text-decoration: none;
    padding: 17px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 20px;
    color: #373737;
    border-radius: 10px;
    background-color: #fff;
    transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;

    &.active {
        color: #6E3BB8;
    }

    &:hover {
        background-color: #F4EFFC;
    }

`;