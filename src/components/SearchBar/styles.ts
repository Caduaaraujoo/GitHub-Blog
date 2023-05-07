import styled from "styled-components";

export const InputSearch = styled.input`
    padding: 0.7rem 1rem;
    width: 52rem;
    height: 3rem;
    background-color: ${props => props.theme.base_input};
    border: 1px solid ${props => props.theme.base_border};
    border-radius: 6px;
    color: ${props => props.theme.base_text};

    ::placeholder{
        font-size: 1rem;
        line-height: 160%;
        color: ${props => props.theme.base_label};
    }

    :focus{
        border-color: ${props => props.theme.blue};
    }

    @media (max-width: 1000px) {
        width: 42.4rem;
    }
`