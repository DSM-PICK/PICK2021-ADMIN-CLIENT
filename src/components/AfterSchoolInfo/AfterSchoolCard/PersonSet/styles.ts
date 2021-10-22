import styled from '@emotion/styled'

interface Props{
    color: string
}

export const PersonSetWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    img{
        width: 28px;
        height: 28px;
    }
`

export const Card = styled.div<Props>`
    cursor: pointer;
    color: ${(props) => props.color};
`