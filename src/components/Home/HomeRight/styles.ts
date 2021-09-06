import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const HomeRightWrapper = styled.div`
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