import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import about from '../../datas/about.json';
import styled from 'styled-components';

const CollapseDivContainer = styled.div`
    display: grid;
    gap: 30px;
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

const CollapseDescriptionParagraph = styled.p`
    font-size: 1.5em;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    border-radius: 0 0 5px 5px;
    @media (max-width: 1024px) {
        font-size: 1.3em;
    }
    @media (max-width: 768px) {
        font-size: 1.1em;
    }
    @media (max-width: 490px) {
        font-size: 0.8em;
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
                        title={`${about.title}`}
                        description={
                            <CollapseDescriptionParagraph>
                                {about.description}
                            </CollapseDescriptionParagraph>
                        }
                    />
                ))}
            </CollapseDivContainer>
        </main>
    );
}

export default About;
