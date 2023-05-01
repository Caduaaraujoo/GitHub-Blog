import { CardProfile } from "../../components/CardProfile";
import { CardPublished } from "../../components/CardPublished";
import { Container, ContainerSection, ContainerHeader, Published } from './styles';

export function Profile() {
    return (
        <Container>
            <ContainerHeader>
                <CardProfile />
            </ContainerHeader>
            <ContainerSection>
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