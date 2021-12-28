import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
`

export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%)
    z-index: 99;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top: 5px solid #000;
    animation: ${spin} 0.7s infinite linear;
`