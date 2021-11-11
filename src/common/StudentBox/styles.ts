import styled from "@emotion/styled";
import { color } from "../../style/color";

export const StudentBoxWrapper = styled.div`
    position: absolute;
    top: 10px;
    transform: translateX(-50%);
    z-index: 99;
    width: 130px;
    max-height: 80px;
    overflow: auto;
    margin: 0 auto;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    -ms-overflow-style: none;
    scrollbar-width: none;
    :-webkit-scrollbar-thumb {
        background-color: hsla(0, 0%, 0%, 0.1);
        border-radius: 100px;
    }
    ::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`

export const StudentName = styled.div`
    padding: 2px;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: ${color.orange};
    }
`