import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import about from '../../datas/about.json';
import styled from 'styled-components';

const CollapseDivContainer = styled.div`
    display: grid;
    gap: 25px;
    margin: 25px 120px;
    @media (max-width: 1024px) {
        margin: 25px 90px;
    }
    @media (max-width: 768px) {
        margin: 25px 30px;
    }
    @media (max-width: 490px) {
        margin: 20px 0;
        gap: 20px;
    }
`;

function About() {
    return (
        <main>
            <Banner />
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
        </main>
    );
}

export default About;
