import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const AfterSchoolCardWrapper = styled.div`
    width: 280px;
    height: 130px;
    background-color: ${color.white};
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        width: 300px;
        height: 150px;
        margin: 0 auto;
    }
`

export const AfterSchoolDes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

export const Line = styled.div`
    width: 1px;
    height: 36px;
    margin: 0 24px;
    background-color: ${color.gray2};
`

export const AfterSchoolName = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-size: 24px;
    text-align: center;
`

export const AfterSchoolInfo = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-size: 18px;
    text-align: center;
`