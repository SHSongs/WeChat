import React from 'react';
import styled from 'styled-components';
import {
    BottomContainer,
    ChatContainer,
    HeaderContainer,
    SideMenuContainer,
  } from './../../containers';
  
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

const WSChatPage = () => {
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

export default WSChatPage;