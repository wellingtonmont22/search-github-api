import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 16px 0 0 16px;
        width: 70%;
        height: 40px;
        font-size: 20px;
        padding: 4px;
        font-weight: 300;
    }
    button{
        background-color: #fff;
        border: 1px solid #C0C0C0;
        border-radius: 0 16px 16px 0;
        padding: 8px;

        &:hover{
            background-color: #ccc;
            box-shadow: 3px 2px 10px rgba( 0, 0, 0, 0.5);
        }
        span{
            color: #000000;
            font-weight: bold;
        }
    }
`;
