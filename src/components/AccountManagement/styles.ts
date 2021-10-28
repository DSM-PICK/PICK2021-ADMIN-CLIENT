import styled from '@emotion/styled';
import { color } from '../../style/color';

export const AMWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1050px;
    height: 600px;
    background-color: ${color.white};
    margin-top: 80px;
`

export const Line = styled.div`
    height: calc(100% - 70px);
    border: 1px solid black;
`
