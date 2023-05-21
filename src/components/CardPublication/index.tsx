import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Container, Header, NavFooter } from './styles';

export function CardPublication({ content }: any) {

    return (
        <Container>
            {content &&
                <>
                    <Header>
                        <NavLink to='http://localhost:5173' className={"hover_link"}>
                            <FontAwesomeIcon icon={faChevronLeft} size='xs' />
                            <span>voltar</span>
                        </NavLink>
                        <NavLink to={content.html_url} className={"hover_link"}>
                            <span>ver no github</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' />
                        </NavLink>
                    </Header>
                    <h1>JavaScript data types and data structures</h1>
                    <NavFooter>
                        <div>
                            <FontAwesomeIcon icon={faGithub} color='#1C2F41' size='lg' />
                            <p>{content.user.login}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendarDay} color='#1C2F41' size='lg' />
                            <p>{content.created_at}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} color='#1C2F41' size='lg' />
                            <p>{content.comments} comentários</p>
                        </div>
                    </NavFooter>
                </>
            }
        </Container>
    )
}

