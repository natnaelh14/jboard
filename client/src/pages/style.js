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
    width: 50%;
    @media only screen and (max-width:1100px) {
        display: none;
}
`;

export const Message = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 4vh;
    font-weight: 200;
    min-height: 100vh;
`;

export const Upload = styled.div`
    display: flex;
    justify-content: center;
`;