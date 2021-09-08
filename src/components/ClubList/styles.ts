import styled from '@emotion/styled'
import { color } from '../../style/color'

export const ClubListWrapper = styled.div`
    
`

export const ClubList = styled.div`
    display: grid;
    grid-template-columns: 392px 392px 392px 392px;
    @media screen and (max-width: 1540px) { 
        grid-template-columns: 392px 392px 392px;
    }
    @media screen and (max-width: 1340px) { 
        grid-template-columns: 392px 392px;
    }
`