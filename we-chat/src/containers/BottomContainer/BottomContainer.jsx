import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    const [message, setMessage] = useState('');

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        axios.post('http://localhost:3001/send',{ 
            message: message,
         })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
      }
    return(
        <>
            <Bottom>
                <SendPlace placeholder="Input Your Text" value={message} onChange={(e) => { setMessage(e.target.value) }}/>
                <SendBtn onClick={handleClick}>SEND</SendBtn>
            </Bottom>
        </>
    )
}

export default BottomContainer;