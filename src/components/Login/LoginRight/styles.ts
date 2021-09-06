import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const LoginRightWrapper = styled.div`
    width: 588px;
    height: 678px;
    background-color: ${color.orange};
    padding: 36px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1540px) { 
        width: 500px;
    }
    @media screen and (max-width: 1340px) { 
        width: 400px;
    }
`

export const Title = styled.div`
    margin-top: 136px;
    color: ${color.white};
    font-size: 28px;
    span{
        margin-right: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
    }
`
    
export const Line = styled.div`
    width: 270px;
    height: 0;
    border: 3px solid ${color.white};
    margin-bottom: 16px;
`

export const Description = styled.div`
    font-size: 24px;
    color: ${color.white};
`