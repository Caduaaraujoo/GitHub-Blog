import { createContext, ReactNode, useEffect, useState } from 'react';
import { IContentIssue } from '../interfaces/IContentIssue';
import { api } from '../services';

interface IContextFunctiosAndProprerty {
    inputSearchIssues: string
    publication: any
    issuesRepos: {
        total_count: number
        items: IContentIssue[]
    }
    filterIssues: (text: string) => void
    updateInputSearchIssues: (text: string) => void
    handlePublication: (publi: any) => void
}

export const GitHubContext = createContext({} as IContextFunctiosAndProprerty)

interface IPropsReactNode {
    children: ReactNode
}

export function GitHubProvider({ children }: IPropsReactNode) {
    const [inputSearchIssues, setInputSearchissues] = useState('');
    const [issuesRepos, setIssuesRepos] = useState([])
    const [publication, setpublication] = useState()

    useEffect(() => {
        fetchIssuesRepos()
    }, [])

    async function fetchIssuesRepos(): Promise<void> {
        try {
            const response = await api.get('/search/issues?q=repo:Caduaaraujoo/GitHub-Blog')
            setIssuesRepos(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    async function filterIssues(text: string): Promise<void> {
        try {
            const response = await api.get(`/search/issues?q=${text}repo:Caduaaraujoo/GitHub-Blog`)
            setIssuesRepos(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handlePublication(publi: any) {
        setpublication(publi)
    }

    return (
        <GitHubContext.Provider value={{
            inputSearchIssues,
            issuesRepos,
            publication,
            filterIssues,
            handlePublication
        }}>
            {children}
        </GitHubContext.Provider>
    )
}