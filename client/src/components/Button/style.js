import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${props => props.full ? '100%' : null}
    min-width: 64px;
    border: 0;
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
    background-color: rgb(249 143 134);
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02857rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {background-color: rgb(245 176 170); text-indent: -5px;}
`;