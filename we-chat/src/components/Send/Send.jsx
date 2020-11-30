import React from 'react';
import styled from 'styled-components';

const SendPlace = styled.input`
    display: flex;
    width: 80%;
    height: 40px;

    margin-left: 20px;
    border-top: none;
    border-left: none;
    border-right: none;

    padding-left: 5px;
    font-size: 19px;
    outline: none;
`;

const Send = () => {
    return(
        <>
            <SendPlace placeholder="Input Your Text"/>
        </>
    )
}

export default Send;