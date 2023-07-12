import Banner from '../../components/Banner';
import CardHousing from '../../components/Card';
import housings from '../../datas/housing.json';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardsSection = styled.section`
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: ${colors.secondary};
    border-radius: 20px;
    padding: 55px;
    @media (max-width: 1250px) {
        padding: 25px;
    }
    @media (max-width: 980px) {
        padding: 25px;
    }
    @media (max-width: 715px) {
        padding: 35px;
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
    gap: 55px;
    @media (max-width: 1250px) {
        gap: 25px;
    }
    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        grid-auto-rows: 270px;
    }
    @media (max-width: 715px) {
        grid-template-columns: 1fr;
        gap: 35px;
    }
    @media (max-width: 425px) {
        gap: 20px;
    }
`;

function Home() {
    return (
        <main>
            <Banner />
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
