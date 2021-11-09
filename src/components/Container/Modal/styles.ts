import styled from '@emotion/styled';
import { color } from '../../../style/color';

export const BasicModalWrapper = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 350px;
    height: 150px;
    position: relative;
    top: 100px;
    transform: translateY(-50%);
    background-color: ${color.white};
`