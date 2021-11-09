import styled from '@emotion/styled'

interface Props{
    color: string
}

export const PersonSetWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    img{
        z-index: 2;
        width: 28px;
        height: 28px;
    }
`

export const Card = styled.div<Props>`
    z-index: 2;
    cursor: pointer;
    color: ${(props) => props.color};
`