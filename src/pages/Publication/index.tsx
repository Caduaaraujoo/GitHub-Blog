import { CardPublication } from "../../components/CardPublication";
import { Container, ContainerArticle, SectionExampleCode } from "./styles";

export function Publication() {
    return (
        <Container>
            <CardPublication />
            <ContainerArticle>
                <p>
                    <span>Programming languages all have built-in data structures, but these often differ from one language to another</span>. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
                <p>
                    <span>Dynamic typing</span><br />
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
            </ContainerArticle>
            <SectionExampleCode>
                <div>
                    <p><span className="const">let</span> foo = <span className="atribbute">42</span></p>
                    <p className="comment">// foo is now a number</p>
                </div>
                <div>
                    <p>foo = <span className="atribbute">'bar'</span></p>
                    <p className="comment">// foo is now a string</p>
                </div>
                <div>
                    <p>foo = <span className="atribbute">true</span></p>
                    <p className="comment">// foo is now a boolean</p>
                </div>
            </SectionExampleCode>
        </Container >
    )
}