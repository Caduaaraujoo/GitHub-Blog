import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 52.3rem;
    height: 12.8rem;
    padding: 32px 32px 32px 40px;
    background-color: ${props => props.theme.base_profile};

    img {
        width: 9rem;
        height: 9rem;
        border-radius: 8px;
    }

    @media (max-width: 1000px){
       width: 47.4rem;

    }
`
export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;

    `
export const Header = styled.header`
    display: flex;
    justify-content: space-between;

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
`

export const DescriptionProfile = styled.article`
    line-height: 160%;
    margin-top: 8px;
`
export const NavFooter = styled.footer` 
    display: flex;
    gap: 24px;
    margin-top: 24px;

    div{
        display: flex;
        align-items: center;
        gap: 8px;
    }
`