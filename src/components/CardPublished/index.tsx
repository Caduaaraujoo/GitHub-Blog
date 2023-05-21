import { useContext, useEffect, useState } from 'react'
import { IContentIssue } from '../../interfaces/IContentIssue'
import { Container, ContainerHeader, ContainerNavLink, Markdown } from './styles'
import { GitHubContext } from '../../context/contextGitHub'

export function CardPublished({ title, body, updated_at, contentComplet }: IContentIssue) {
    const [contenTitleMarkdown, setContentTitleMarkdown] = useState('')
    const { handlePublication } = useContext(GitHubContext)
    const [publicationDate, setPublicationDate] = useState<string>('')
    useEffect(() => {
        setContentTitleMarkdown(body.split('##')[0])
        const date = new Date(updated_at)
        setPublicationDate(date.toLocaleDateString("pt-BR"));
    }, [])

    return (
        <ContainerNavLink to='http://localhost:5173/publicacao' className={"hover_link"}>
            <Container onClick={() => handlePublication(contentComplet)}>
                <ContainerHeader>
                    <h1>
                        {title}
                    </h1>
                    <span>{publicationDate}</span>
                </ContainerHeader>
                <Markdown children={contenTitleMarkdown} />
            </Container>
        </ContainerNavLink>
    )
}

