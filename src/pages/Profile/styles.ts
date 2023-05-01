import styled from "styled-components";

export const Container = styled.div` 
    height: 36rem;
    overflow: auto;
`

export const ContainerHeader = styled.div`
    position: absolute;
    top: auto;
    left: 50%;
    transform: translate(-50%, -50%);

`

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15rem;
    gap: 2rem;


    `
export const Published = styled.div`
    display: flex;
    gap: 2rem;
    
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`
