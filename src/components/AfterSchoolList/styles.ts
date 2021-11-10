import styled from '@emotion/styled'
import { color } from '../../style/color'

export const AfterSchoolListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const AfterSchoolListBox = styled.div`
    height: 570px;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 350px);
    grid-auto-rows: 160px;
    @media screen and (max-width: 1600px) { 
        grid-template-columns: repeat(3, 350px);
    }
    @media screen and (max-width: 1340px) { 
        grid-template-columns: repeat(3, 350px);
    }
`