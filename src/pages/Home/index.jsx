import BannerHome from '../../components/Banner';
import CardHousing from '../../components/Card';
import housings from '../../datas/housing.json';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardsSection = styled.section`
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: ${colors.secondary};
    border-radius: 20px;
    padding: 35px;
    @media (max-width: 980px) {
        padding: 25px;
    }
    @media (max-width: 425px) {
        padding: 0;
        background-color: ${colors.white};
        margin-top: 20px;
    }
`;

const CardsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 35px;
    @media (max-width: 1166px) {
        grid-auto-rows: minmax(240px, auto);
    }
    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }
    @media (max-width: 595px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 425px) {
        gap: 25;
    }
`;

function Home() {
    return (
        <main>
            <BannerHome />
            <CardsSection>
                <CardsDiv>
                    {housings.map((housing) => (
                        <CardHousing
                            key={`${housing.id}`}
                            id={`${housing.id}`}
                            cover={`${housing.cover}`}
                            title={`${housing.title}`}
                        />
                    ))}
                </CardsDiv>
            </CardsSection>
        </main>
    );
}

export default Home;
