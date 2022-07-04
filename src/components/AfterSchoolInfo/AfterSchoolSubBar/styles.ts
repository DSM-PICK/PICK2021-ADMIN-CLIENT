import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const AfterSchoolSubBarWrapper = styled.div`
    width:calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1600px) { 
        width: 1000px;
    }
    @media screen and (max-width: 1340px) { 
        width: 700px;
    }
`

export const ASInfoLeft = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    div{
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        display: flex;
        align-items: center;
    }
`

export const ASInfoRight = styled.div`
    width: 230px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ASButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    color: white;
    cursor: pointer;
    :nth-of-type(1) {
        background-color: ${color.orange};
    }
    :nth-of-type(2) {
        background-color: ${color.red};
    }
`

export const StudentSearch = styled.form`
    width: 210px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${color.white};
    input{
        width: 140px;
        height: 25px;
        padding: 10px;
        border: none;
        font-size: 20px;
        outline: none;
    }
    button{
        border: none;
        outline: none;
        background: none;
        img{
            width: 30px;
            height: 30px;
            cursor: pointer;
            padding-right: 5px;
        }
    }
`