import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.a`
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin-right: 100px;
    color: #000;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #f7ca18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

  :hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: ntwo;
  }
  :hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
  }
  :before {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: "";
    color: #000 !important;
    background: #f7ca18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
`;
