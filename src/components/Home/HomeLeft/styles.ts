import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const HomeLeftWrapper = styled.div`
    width: 699px;
    height: 700px;
    background-color: ${color.white};
    @media screen and (max-width: 1540px) { 
        width: 600px;
    }
    @media screen and (max-width: 1340px) { 
        width: 500px;
    }
`

export const Title = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 41px;
    text-align: center;
    margin-top: 30px;
`

export const NoData = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    position: relative;
    top: 45%;
    transform: translateY(-70%);
`