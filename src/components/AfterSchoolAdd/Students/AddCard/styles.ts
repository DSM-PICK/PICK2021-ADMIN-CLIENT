import styled from "@emotion/styled/macro";
import { color } from "../../../../style/color";

export const CardWrpper = styled.div`
    width: 200px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${color.white};
    input{ 
        width: 100px;
        outline: none;
        font-size: 20px;
        border: none;
        text-align: center;
    }
`