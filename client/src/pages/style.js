import styled from 'styled-components';

export const EntryPage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 120px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 300;
`;

export const HomeImage = styled.img`
    height:700px;
    width: 50%;
    @media only screen and (max-width:900px) {
        display: none;
}
`;

export const Message = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 4vh;
    font-weight: 200;
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