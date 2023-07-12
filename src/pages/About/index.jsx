import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import about from '../../datas/about.json';
import styled from 'styled-components';

const CollapseDivContainer = styled.div`
    display: grid;
    gap: 25px;
    margin: 25px 70px;
    @media (max-width: 768px) {
        margin: 25px 30px;
    }
    @media (max-width: 490px) {
        margin: 25px 0;
    }
`;

function About() {
    return (
        <main>
            <Banner />
            <section>
                <CollapseDivContainer>
                    {about.map((about) => (
                        <Collapse
                            key={`${about.id}`}
                            id={`${about.id}`}
                            title={`${about.title}`}
                            description={`${about.description}`}
                        />
                    ))}
                </CollapseDivContainer>
            </section>
        </main>
    );
}

export default About;
