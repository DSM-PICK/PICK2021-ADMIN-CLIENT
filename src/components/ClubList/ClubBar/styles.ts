import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const ClubBarWrapper = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 32px;
`

export const ClubAdd = styled.div`
    width: 123px;
    height: 50px;
    display: flex;
    background-color: ${color.white};
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    img{
        width: 30px;
        height: 30px;
    }
    div{
        font-size: 22px;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
    }
`

export const ClubSearch = styled.form`
    margin: 0 32px;
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${color.white};
`

export const ClubInput = styled.input`
    width: 210px;
    font-size: 22px;
    outline: none;
    border: none;
`

export const ClubButton = styled.button`
    border: none;
    background-color: ${color.white};
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

export const ClubSort = styled.div`
    width: 124px;
    height: 50px;
    background-color: ${color.white};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    margin-right: 16px;
    img{
        width: 30px;
        height: 30px;
    }
    div {
        font-size: 22px;
    }
`