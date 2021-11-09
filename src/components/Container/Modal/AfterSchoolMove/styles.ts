import styled from '@emotion/styled'
import { color } from '../../../../style/color'

export const ASMoveWrapper = styled.div`
    width: 300px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    background-color: white;
`

export const ASMoveTitle = styled.div`
    display: flex;
    justify-content: space-around;
    div{
        font-size: 22px;
        font-weight: bold;
        color: ${color.gray};
    }
`

export const ASDes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        text-align: center;
        width: 100px;
        font-size: 20px;
    }
    img{
        width: 50px;
    }
`

export const ASButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    :nth-of-type(1) {
        background-color: ${color.orange};
        color: white
    }
`