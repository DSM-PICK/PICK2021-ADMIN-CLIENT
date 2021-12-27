import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const EditBarIconBox = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
        margin: 16px 24px;
        margin-bottom: 6px;
    }
`

export const EditBarText = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 14px;
    text-align: center;
    color: ${color.gray};
`