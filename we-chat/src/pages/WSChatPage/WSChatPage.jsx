import React from 'react';
import styled from 'styled-components';
import {
    BottomContainer,
    ChatContainer,
    HeaderContainer,
    SideMenuContainer,
  } from './../../containers';
import io from 'socket.io-client';

let socket;
const ENDPOINT = "http://localhost:3001";

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
        socket = io(ENDPOINT);
        const str = "hwi";         //버튼을 클릭하면
    
        socket.emit("sendMessage", "message is mmm", "o");


        (() => {
            socket.emit('init', { name: 'bella' });
          
            socket.on('welcome', (msg) => {
              console.log(msg);
            });
            
        })();
        
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