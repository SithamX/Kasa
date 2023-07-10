import BannerWithoutText from '../../components/BannerWithoutText';
import AboutBannerImage from '../../assets/image-banner-about.jpg';
import Collapse from '../../components/Collapse';
import about from '../../datas/about.json';
import styled from 'styled-components';

const CollapseDivContainer = styled.div`
    display: grid;
    gap: 25px;
    margin: 25px 70px;
`;

function About() {
    return (
        <main>
            <BannerWithoutText imageUrl={AboutBannerImage} />
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
