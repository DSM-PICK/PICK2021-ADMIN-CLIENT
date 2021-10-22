import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const AfterSchoolCardWrapper = styled.div`
    width: 360px;
    height: 200px;
    background-color: ${color.white};
    margin: 0 auto;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    color: black;
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
    font-size: 40px;
    text-align: center;
`

export const AfterSchoolInfo = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-size: 24px;
    text-align: center;
`