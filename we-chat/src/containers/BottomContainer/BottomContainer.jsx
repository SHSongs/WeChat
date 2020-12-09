import React from 'react';
import styled from 'styled-components';
import { Send } from './../../components';
import axios from 'axios';

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
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        axios.post('http://localhost:3001/login',{ username: "hihihi", password: "mm" })
        .then((response)=>{
            console.log(response.data);
            if(response.data === 1){
                //메인페이지로
            }
        })
        .catch((error)=>{
            console.log(error);
        });
      }
    return(
        <>
            <Bottom>
                <Send/>
                <SendBtn onClick={handleClick}>SD</SendBtn>
            </Bottom>
        </>
    )
}

export default BottomContainer;