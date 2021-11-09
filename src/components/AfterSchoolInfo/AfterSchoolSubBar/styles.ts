import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const AfterSchoolSubBarWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    div{
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 1600px) { 
        width: 1000px;
    }
    @media screen and (max-width: 1340px) { 
        width: 700px;
    }
`

export const StudentSearch = styled.div`
    width: 200px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${color.white};
    input{
        width: 140px;
        height: 25px;
        padding: 5px;
        border: none;
        font-size: 20px;
        outline: none;
    }
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
        padding-right: 5px;
    }
`