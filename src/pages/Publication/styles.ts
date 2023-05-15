import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    top: auto;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const ContainerArticle = styled.article`
    position: absolute;
    width: 52.3rem;
    height: 25.5;
    padding: 2.4rem 2rem;

    @media (max-width: 1000px){
       width: 47.4rem;
    }

    p {
        line-height: 160%;
        margin-bottom: 20px;
    }

    span {
        font-weight: 700;
        line-height: 160%;
        color: ${props => props.theme.base_text};
    }

`
export const SectionExampleCode = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    top: 30.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    height: 8rem;
    background: ${props => props.theme.base_post};
    border-radius: 2px;
    padding: 1rem;

    @media (max-width: 1000px){
       width: 45rem;
       top: 32rem;
    }

    div{
        display: flex;
        gap: 50px;

        p, .span {
            font-family: 'Fira Code';
            line-height: 160%;
        }
        .const {
            color: #80ABD6;
        }
        .comment {
            color: #4F6173;
        }
        .atribbute{
            color: #6AD445;
        }
    }

`