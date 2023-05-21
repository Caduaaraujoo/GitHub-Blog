import { useContext } from "react";
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CardPublication } from "../../components/CardPublication";
import { GitHubContext } from '../../context/contextGitHub';
import { Container, ContainerArticle } from "./styles";

const Component: CodeComponent = ({ children }) => {
    return (
        <SyntaxHighlighter language="javascript" style={a11yDark}>
            {children}
        </SyntaxHighlighter>
    );
};

export function Publication() {
    const { publication } = useContext(GitHubContext)
    return (
        <Container>
            <CardPublication content={publication} />
            <ContainerArticle>
                {publication &&
                    <ReactMarkdown children={publication.body} components={{
                        code: Component
                    }} />
                }
            </ContainerArticle>
        </Container >
    )
}