import styled from '@emotion/styled'
import { color } from '../../../../style/color'

export const ClubMoveWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ClubMoveTitle = styled.div`
    display: flex;
    justify-content: space-around;
    div{
        font-size: 22px;
        color: ${color.gray};
    }
`

export const ClubDes = styled.div`
    display: flex;
    justify-content: space-around;
    div{
        font-size: 26px;
    }
    img{
        width: 80px;
    }
`