import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeadder = styled(Row)`   

    height:65px;
    align-items:center;
    background-color: #111111;
    gap: 16px;
    flex-wrap:nowrap;
    width:1270px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled.span`
    font-size: 25px;
    color: #fff;
    margin-left:0px;
    font-weightL bolder;
    padding-top:20px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
    &:hover{
        color:rgb(26,148,255);  
        font-size: 26px
    }
`
export const WrapperHeaderAccount = styled.div`
    margin-left:10px;
    color: #fff;
    display:flex;
    align-items: center;
    gap: 10px;
    font-size:15px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 15px;
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
     &:hover {
    background-color: var(--primary-color);
    color: #7743DB;
    font-weight:700;
    font-size:18px
    border-radius: 4px;
  }
`
export const WraperContextPupop = styled.p`
    cursor:pointer;
    &:hover{
        color:rgb(26,148,255);    
    }
`