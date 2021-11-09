import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
`
export const Left = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const PeopleCount = styled.div`
    font-size: 18px;
`

export const Right = styled.div`
    width: 250px;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    input{
        padding-left: 10px;
        font-size: 18px;
        width: 200px;
        outline: none;
        border: none;
    }
    img{
        width: 30px;
        height: 30px;
    }
`