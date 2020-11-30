import React from 'react';
import styled from 'styled-components';

const ProbInfo = styled.div`
    font-size: 17px;
    font-weight: 300;

    padding-top: 10px;
    padding-left: 10px;

    font-weight: 400;
`;


const NowProb = () => {
    return(
        <>
            <ProbInfo>현재 접속 중 : 12392 명</ProbInfo> 

            <ProbInfo></ProbInfo>
            <ProbInfo>맞은 사람 : 2103 명 <br/>틀린 사람 : 2103 명</ProbInfo>
        </>
    )
}

export default NowProb;