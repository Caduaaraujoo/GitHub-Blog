import { Container, ContainerHeader, ContainerNavLink } from './styles'


export function CardPublished() {

    function handleClick() {
        console.log('aqui')
    }


    return (
        <ContainerNavLink to='http://localhost:5173/publicacao' className={"hover_link"}>
            <Container onClick={handleClick}>
                <ContainerHeader>
                    <h1>
                        JavaScript data types and data structures
                    </h1>
                    <span>Há 1 dia</span>
                </ContainerHeader>
                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
            </Container>
        </ContainerNavLink>
    )
}