import React from 'react';
import styled from 'styled-components';
import { LatestProb, NowProb, Answer } from './../../components';

const SideMenuPlace = styled.div`
    display: flex;
    width: 300px;
    height: 693px;
    flex-direction: column;

    border: 1px solid;
    
    border-left: none;
`;

const LatestProbPlace = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 300px;

    background-color: #0C151C;
    color: #B2C0CC;
`;

const NowProbPlace = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 200px;
`;

const SideMenuContainer = () => {
    return(
        <>
            <SideMenuPlace>
                <LatestProbPlace>
                    <LatestProb/>
                </LatestProbPlace>
                <NowProbPlace>
                    <NowProb/>
                </NowProbPlace>
                <Answer/>
            </SideMenuPlace>
        </>
    )
}

export default SideMenuContainer;