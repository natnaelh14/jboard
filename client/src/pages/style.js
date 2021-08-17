import styled from 'styled-components';

export const EntryPage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fbfbfb;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 300;
`;

export const Upload = styled.div`
    display: flex;
    justify-content: center;
    ${'' /* width: ${props => props.full ? '100%' : null}
    min-width: 64px;
    border: 0;
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
    background-color: #2f8bfd;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02857rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {background-color: #0072ff} */}
`;