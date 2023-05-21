import { InputSearch } from './styles'
import { GitHubContext } from '../../context/contextGitHub'
import { useContext, useEffect, useState } from 'react'

export function SearchBar() {
    const { filterIssues } = useContext(GitHubContext)
    const [searchIssue, setSearchIssue] = useState('')

    useEffect(() => {
        filterIssues(searchIssue)
    }, [searchIssue])

    return (
        <InputSearch
            placeholder='Buscar conteúdo'
            onChange={(e) => setSearchIssue(e.target.value)}
        />
    )
}