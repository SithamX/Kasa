import BannerWithoutText from '../../components/BannerWithoutText';
import AboutBannerImage from '../../assets/image-banner-about.jpg';
import Collapse from '../../components/Collapse';

function About() {
    return (
        <main>
            <BannerWithoutText imageUrl={AboutBannerImage} />
            <div>
                <h1>Page A Propos</h1>
                <Collapse />
            </div>
        </main>
    );
}

export default About;
