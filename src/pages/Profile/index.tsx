import { CardProfile } from "../../components/CardProfile";
import { CardPublished } from "../../components/CardPublished";
import { SearchBar } from "../../components/SearchBar";
import { Container, ContainerSection, ContainerHeader, Published, InfoPublished } from './styles';

export function Profile() {
    return (
        <Container>
            <ContainerHeader>
                <CardProfile />
            </ContainerHeader>
            <ContainerSection>
                <InfoPublished>
                    <h1>Publicações</h1>
                    <span>6 publicações</span>
                </InfoPublished>
                <SearchBar />
                <Published>
                    <CardPublished />
                    <CardPublished />
                </Published>
                <Published>
                    <CardPublished />
                    <CardPublished />
                </Published>
                <Published>
                    <CardPublished />
                    <CardPublished />
                </Published>
            </ContainerSection>
        </Container>
    )
}