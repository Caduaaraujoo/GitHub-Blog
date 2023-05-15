import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 52.3rem;
    height: 10rem;
    background-color: ${props => props.theme.base_profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    @media (max-width: 1000px){
       width: 47.4rem;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.3rem;

    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
    }
    a {
        display: flex;
        align-items: center;
        font-weight: 700;
        gap: 8px;
        color: ${props => props.theme.blue};
        text-decoration: none;
        
        span{
            font-family: 'Nunito';
            font-weight: 700;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
        }
    }

    & .hover_link{
        &:hover{
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`

export const NavFooter = styled.footer` 
    display: flex;
    gap: 24px;
    margin-top: 0.7rem;

    div{
        display: flex;
        align-items: center;
        gap: 8px;
    }
`