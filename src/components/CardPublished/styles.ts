import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 25.2rem;
    height: 15.7rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme.base_post};

    p{
        overflow: auto;
    }

    @media (max-width: 1000px){
       width: 700px;

    }
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h1{ 
        width: 17rem;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        color: ${props => props.theme.base_title};
    }

    span{
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: ${props => props.theme.base_span};
    }
`