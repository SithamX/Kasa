import BannerHome from "../../components/Banner"
import CardHousing from "../../components/Card"
import housings from "../../datas/housing.json"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const CardsSection = styled.section`
    margin-top: 30px;
    background-color: ${colors.secondary};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    @media (max-width: 630px) {
        justify-content: start;
    }
`

function Home() {
    return (
        <main>
            <BannerHome />
            <CardsSection>
                {housings.map((housing) => 
                    <CardHousing 
                        cover={`${housing.cover}`}
                        title={`${housing.title}`}
                    />
                )}
        </CardsSection>
        </main>
    )
}

export default Home