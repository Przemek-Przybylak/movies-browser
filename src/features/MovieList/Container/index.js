import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}){
        gap: 16px;
    };
`;
