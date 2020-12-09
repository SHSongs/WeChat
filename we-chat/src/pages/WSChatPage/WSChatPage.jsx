import React from 'react';
import styled from 'styled-components';
import {
    BottomContainer,
    ChatContainer,
    HeaderContainer,
    SideMenuContainer,
  } from './../../containers';
import axios from 'axios';
  
const WSChatPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 90%;

    justify-content: center;
    padding-top: 35px;
`;

const WSChatPages = styled.div`
    display: flex;
    width: auto;
    height: auto;
    
    flex-direction: column;
`;

class WSChatPage extends React.Component{
    AAA(){
        axios.get('http://localhost:3001/')
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
        
    }
    
    render(){
        this.AAA();
        return(
            <WSChatPageContainer>
                <WSChatPages>    
                    <HeaderContainer/>
                    <ChatContainer/>
                    <BottomContainer/>
                </WSChatPages>  
                <SideMenuContainer/>
            </WSChatPageContainer>
        )
    }
} 
    

export default WSChatPage;