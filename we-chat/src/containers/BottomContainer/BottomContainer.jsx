import React from 'react';
import styled from 'styled-components';
import { Send } from './../../components';

const Bottom = styled.div`
    display: flex;
    align-items: center;

    width: 1035px;
    height: 80px;

    border: 1px solid;
    border-top: none;
`;

const SendBtn = styled.button`
    display: flex;
    border: none;
    outline: none;

    width: 100px;
    height: 45px;
    padding-left: 25px;
    padding-top: 10px;
    border-radius: 6px; 

    font-size: 18px;
    margin-left: 40px;
    background-color: #0C151C;
    color: #B2C0CC;

    &:hover{
        cursor: pointer;
    }
`;

const BottomContainer = () => {
    return(
        <>
            <Bottom>
                <Send/>
                <SendBtn>SEND</SendBtn>
            </Bottom>
        </>
    )
}

export default BottomContainer;