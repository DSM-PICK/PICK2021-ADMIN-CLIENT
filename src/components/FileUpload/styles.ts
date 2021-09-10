import styled from '@emotion/styled';
import { color } from '../../style/color';

export const FileUploadWrapper = styled.div`
    width: 1150px;
    height: 750px;
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1540px) { 
        width: 1000px;
    }
    @media screen and (max-width: 1340px) { 
        width: 900px;
    }
    img{
        width: 192px;
        height: 192px;
        margin: 0 auto;
    }

    div{
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 35px;
        margin-top: 74px;
        margin-bottom: 16px;
        text-align: center;
    }
`

export const FileButton = styled.button`
    width: 384px;
    height: 72px;
    border: none;
    background-color: ${color.orange};
    margin: 0 auto;
    cursor: pointer;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 41px;
    color: ${color.white};
`