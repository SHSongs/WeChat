import React from 'react';
import styled from 'styled-components';

const Problem = styled.div`
    font-size: 30px;
    font-weight: 400;
`;

const ProbInfo = styled.div`
    font-size: 17px;
    font-weight: 300;

    padding-top: 10px;
    padding-left: 10px;
`;

const LatestProb = () => {
    return(
        <>
            <Problem>문제 102</Problem>
            <ProbInfo>맞춘 사람 : 2103 명<br/>틀린 사람 : 2100 명</ProbInfo> 

            <ProbInfo>못푼 사람 : 2103 명</ProbInfo>
            <ProbInfo>참가한 인원 : 2103 명</ProbInfo>
        </>
    )
}

export default LatestProb;