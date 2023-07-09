import BannerWithoutText from '../../components/BannerWithoutText';
import AboutBannerImage from '../../assets/image-banner-about.jpg';

function About() {
    return (
        <main>
            <BannerWithoutText imageUrl={AboutBannerImage} />
            <div>
                <h1>Page A Propos</h1>
            </div>
        </main>
    );
}

export default About;
