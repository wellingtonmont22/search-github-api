import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;
export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    h1{
        font-size: 32px;
        font-weight: bold;

    }
    h3{
        font-size: 18px;
        font-weight: bold;

    }
    h4{
        font-size: 16px;
        font-weight: bold;

    }
`;
export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
    @media screen and (max-width:700px){
        display: grid;
        grid-template-columns: 80px 80px;
    }
`;
export const WrapperGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }
    a {
        text-decoration: none;
        color: grey;
        font-weight: bold;
        font-size: 18px;
    }

`;
export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;

