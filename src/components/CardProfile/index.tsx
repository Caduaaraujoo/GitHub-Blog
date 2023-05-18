
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../services';
import { Container, ContainerInformation, DescriptionProfile, Header, NavFooter } from './styles';

interface ValueTypeUser {
    name: string,
    description: string,
    user: string,
    company: string,
    avatar: string,
    followers: number,
    url: string
}

export function CardProfile() {
    const [userContent, setUserContent] = useState<ValueTypeUser>()

    useEffect(() => {
        fetchApiGitUser()
    }, [])

    async function fetchApiGitUser(): Promise<void> {
        try {
            const response = await api.get("/users/Caduaaraujoo")


            setUserContent({
                name: response.data.name,
                avatar: response.data.avatar_url,
                company: response.data.company,
                description: response.data.bio,
                followers: response.data.followers,
                url: response.data.html_url,
                user: "Caduaaraujoo"
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <img src={userContent?.avatar} />
            <ContainerInformation>
                <Header>
                    <h1>{userContent?.name}</h1>
                    <NavLink to={userContent?.url} className={"hover_link"}>
                        <span>github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' />
                    </NavLink>
                </Header>
                <DescriptionProfile>
                    {userContent?.description}
                </DescriptionProfile>
                <NavFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} color='#1C2F41' size='lg' />
                        <p>{userContent?.user}</p>
                    </div>
                    <div style={{ 'display': !userContent?.company ? 'none' : 'flex' }}>
                        <FontAwesomeIcon icon={faBuilding} color='#1C2F41' size='lg' />
                        <p>{userContent?.company}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} color='#1C2F41' size='lg' />
                        <p>{userContent?.followers}</p>
                    </div>
                </NavFooter>
            </ContainerInformation>
        </Container>
    )
}