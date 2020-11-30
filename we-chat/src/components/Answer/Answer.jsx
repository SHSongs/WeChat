import React from 'react';
import styled from 'styled-components';
import sendImg from './sendImg.png';

const AnswerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    align-items: flex-end;
`;

const InputAnswer = styled.input`
    width: 70%;
    height: 40px;

    font-size: 18px;
    margin-bottom: 15px;
    margin-left: 10px;

    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
`;

const SendImage = styled.img`
    width: 50px;
    margin-Bottom: 10px;
    margin-Left: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const Answer = () => {
    return(
        <>
            <AnswerContainer>
                <InputAnswer placeholder="Enter Answer"/>
                <SendImage src={sendImg}/>
            </AnswerContainer>
        </>
    )
}

export default Answer;