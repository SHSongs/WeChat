import React, {useState, useEffect} from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import './Header.css';
import styled from 'styled-components';

const MoreIcon = styled.div`
  padding-top: 7px;
  padding-left: 5px;
  
  float: right;
  overflow: hidden;
  transition: all 0.2s ease-out;
  transform: ${props => (props.rotate ? `rotate(90deg)` : `rotate(0deg)`)};

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const date = new Date();

  const [minute, setMinute] = useState(parseInt(59 - date.getMinutes()));
  const [second, setSecond] = useState(parseInt(59 - date.getSeconds()));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(second) > 0) {
        setSecond(parseInt(second) - 1);
      }
      if (parseInt(second) === 0) {
        setMinute(parseInt(minute) - 1);
        setSecond(59);
      }
    }, 1000)
    return() => clearInterval(countdown);
  }, [minute, second])

  return (
    <>
      <div className="Header-Container">
        <div className="Header-Container-Quiz">
          문제 103
          <MoreIcon rotate={toggle} onClick={() => setToggle(!toggle)}>
            <BsFillCaretRightFill id="MoreIcon"/>
          </MoreIcon>
        </div>
        <div className="Header-Container-TimeRemaining">
          남은 시간 : {minute}분 {second}초
        </div>
      </div>
    </>
  );
};

export default Header;
