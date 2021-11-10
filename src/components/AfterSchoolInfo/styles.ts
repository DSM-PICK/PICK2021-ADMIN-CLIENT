import styled from '@emotion/styled'

export const CardWrapper = styled.div`
    height: 480px;
    overflow: auto;
    display: grid;
    justify-content: center;
    margin-top: 20px;
    grid-template-columns: repeat(6, 250px);
    grid-auto-rows: 120px;
    @media screen and (max-width: 1600px) { 
        grid-template-columns: repeat(5, 250px);
    }
    @media screen and (max-width: 1340px) { 
        grid-template-columns: repeat(3, 250px);
    }
`