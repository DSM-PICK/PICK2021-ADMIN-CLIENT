import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const AfterSchoolBarWrapper = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 32px;
`

export const AfterSchoolAdd = styled.div`
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

export const AfterSchoolSearch = styled.form`
    margin: 0 32px;
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${color.white};
`

export const AfterSchoolInput = styled.input`
    width: 210px;
    font-size: 22px;
    outline: none;
    border: none;
`

export const AfterSchoolButton = styled.button`
    border: none;
    background-color: ${color.white};
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

export const AfterSchoolSort = styled.div`
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