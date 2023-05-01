import Profile from '../../assets/Profile.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Container, ContainerInformation, Header, DescriptionProfile, NavFooter } from './styles'
import { NavLink } from 'react-router-dom';

export function CardProfile() {
    return (
        <Container>
            <img src={Profile} />
            <ContainerInformation>
                <Header>
                    <h1>Carlos Araujo</h1>
                    <NavLink to='https://github.com/Caduaaraujoo'>
                        <span>github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' />
                    </NavLink>
                </Header>
                <DescriptionProfile>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa ipsam, fugiat illo voluptatem eveniet consequuntur. Ipsa nostrum, nobis cumque cupiditate corporis vel tempora repellendus et dolor exercitationem quam dolore.
                </DescriptionProfile>
                <NavFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} color='#1C2F41' size='lg' />
                        <p>Caduaaraujoo</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBuilding} color='#1C2F41' size='lg' />
                        <p>T2S Tecnologia</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} color='#1C2F41' size='lg' />
                        <p>56 seguidores</p>
                    </div>
                </NavFooter>
            </ContainerInformation>
        </Container>
    )
}