import styled from '@emotion/styled';
import { color } from '../../../style/color';

export const Wrapper = styled.div`
    width: calc(100% - 50px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    @media screen and (max-width: 1600px) { 
        width: 1000px;
    }
    @media screen and (max-width: 1340px) { 
        width: 700px;
    }
`
export const Left = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
    input{
        width: 150px;
        background: none;
        border: none;
        text-align: center;
        font-size: 18px;
        outline: none;
        border-bottom: 1px soild black;
    }
`

export const Right = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PeopleCount = styled.div`
    font-size: 18px;
`

export const ASAddButton = styled.div`
    width: 120px;
    height: 30px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    background-color: ${color.orange};
`