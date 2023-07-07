import BannerHome from '../../components/Banner';
import CardHousing from '../../components/Card';
import housings from '../../datas/housing.json';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardsSection = styled.section`
    margin-top: 30px;
    background-color: ${colors.secondary};
    border-radius: 20px;
    padding: 15px;
    @media (max-width: 630px) {
        padding: 0;
        background-color: ${colors.white};
    }
`;

const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 630px) {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: start;
    }
    /*@media (max-width: 1440px) {
        flex-wrap: nowrap;
        justify-content: start;
    }*/
`;

function Home() {
    return (
        <main>
            <BannerHome />
            <CardsSection>
                <CardsDiv>
                    {housings.map((housing) => (
                        <div key={housing.id}>
                            <CardHousing
                                id={`${housing.id}`}
                                cover={`${housing.cover}`}
                                title={`${housing.title}`}
                            />
                        </div>
                    ))}
                </CardsDiv>
            </CardsSection>
        </main>
    );
}

export default Home;
