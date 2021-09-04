import styled from "styled-components";

export const Title = styled.p`
    justify-content: center;
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: bold;
`;
export const Link = styled.a`
    font-size: 16px;
    color: blue;
    
`;
export const Label = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #c0c0c0;
    padding: 8px;
    margin: 4px;
    border-radius: 4px;
    width: 400px;
    height: 100px;
    justify-content: center;
    

    &:hover{
        box-shadow: 3px 2px 10px rgba( 0, 0, 0, 0.5);
    }
`;