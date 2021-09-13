import styled from '@emotion/styled'

export const CardWrapper = styled.div`
    height: 500px;
    overflow: auto;
    display: grid;
    justify-content: center;
    margin-top: 20px;
    grid-template-columns: 300px 300px 300px 300px 300px;
    @media screen and (max-width: 1600px) { 
        grid-template-columns: 300px 300px 300px 300px;
    }
    @media screen and (max-width: 1340px) { 
        grid-template-columns: 300px 300px 300px;
    }
`