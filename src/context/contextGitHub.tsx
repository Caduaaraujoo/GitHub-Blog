import { createContext, ReactNode } from 'react';

export const GitHubContext = createContext({} as any)

interface IPropsReactNode {
    children: ReactNode
}

export function GitHubProvider({ children }: IPropsReactNode) {
    const name = "Cadu"

    return (
        <GitHubContext.Provider value={{ name }}>
            {children}
        </GitHubContext.Provider>
    )
}