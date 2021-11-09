import styled from '@emotion/styled';
import { color } from '../../../style/color';

export const TeacherListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    span {
        font-size: 22px;
    }
`

export const TeacherListBox = styled.div`
    margin-top: 20px;
    text-align: center;
    width: 100%;
    height: 450px;
    overflow: auto;
`

export const Teacher = styled.p<{isActive: boolean}>`
    font-size: 20px;
    cursor: pointer;
    &:hover{
        color: ${color.orange};
    }
    ${(props) =>
    props.isActive &&
    `
        width: 150px;
        margin: 0 auto;
        border-radius: 10px;
        color: white;
        background-color: ${color.orange};
        &:hover{
            color: white;
        }
    `}
    
`