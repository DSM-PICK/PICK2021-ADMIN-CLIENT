import styled from '@emotion/styled'
import { color } from '../../../../style/color'

export const ContainerWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-bottom: 8px;
    margin-top: 40px;
    display: grid;
    text-align: center;
    grid-template-columns: 125px 125px 125px 125px;
    color: ${color.gray};
`