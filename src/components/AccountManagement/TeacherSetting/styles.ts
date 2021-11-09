import styled from '@emotion/styled'
import { color } from '../../../style/color'

export const TeacherSettingWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TeacherInfoBox = styled.div`
    width: 600px;
    height: 130px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InfoBox = styled.div`
    height: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    :nth-of-type(2){
        flex: 2 1 0;
    }
    div{
        font-size: 21px;
    }
    input {
        font-size: 21px;
        outline: none;
        border: none;
        background-color: ${color.white};
    }
`