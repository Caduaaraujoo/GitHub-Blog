import { useContext } from "react";
import { CardProfile } from "../../components/CardProfile";
import { CardPublished } from "../../components/CardPublished";
import { SearchBar } from "../../components/SearchBar";
import { GitHubContext } from '../../context/contextGitHub';
import { Container, ContainerHeader, ContainerSection, InfoPublished, Published } from './styles';



export function Profile() {
    const { issuesRepos } = useContext(GitHubContext)

    return (
        <Container>
            <ContainerHeader>
                <CardProfile />
            </ContainerHeader>
            <ContainerSection>
                <InfoPublished>
                    <h1>Publicações</h1>
                    <span>{issuesRepos.total_count} publicações</span>
                </InfoPublished>
                <SearchBar />
                <Published  >
                    {issuesRepos.items && issuesRepos.items.map((item) => (
                        <CardPublished
                            key={item.id}
                            title={item.title}
                            body={item.body}
                            updated_at={item.updated_at}
                            contentComplet={item}
                        />
                    ))}
                </Published>
            </ContainerSection>
        </Container >
    )
}