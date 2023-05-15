import styled from "styled-components";

export const Container = styled.div` 
    height: 36rem;
    overflow: auto;
    ::-webkit-scrollbar{
        display: none;
    }
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
    margin-top: 11rem;
`

export const Published = styled.div`
    display: flex;
    gap: 2rem;
    margin: 2rem;
    
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
    }
`

export const InfoPublished = styled.section`
    width: 51rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.7rem;

    h1{
        font-weight: 700;
        font-size: 1.1rem;
        line-height: 160%;
        color: ${props => props.theme.base_subtitle};
    }

    span{
        font-size: 0.8rem;
        line-height: 160%;
        text-align: right;
        color: ${props => props.theme.base_span};
    }

    @media (max-width: 1000px) {
        width: 42.4rem;
    }
`
