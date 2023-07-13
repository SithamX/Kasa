import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import housings from '../../datas/housing.json';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';

const HousingTitle = styled.h1`
    color: ${colors.primary};
    font-size: 2.3em;
    margin-bottom: 5px;
`;
const HousingLocation = styled.p`
    color: ${colors.primary};
    font-size: 1.2em;
    margin-top: 0;
`;
const HousingTagDiv = styled.div`
    display: flex;
    gap: 10px;
`;
const HousingCollapseDiv = styled.div`
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

function Housing() {
    const { id } = useParams();
    const HousingData = housings.find((housing) => housing.id === id);
    if (!HousingData) {
        return <div>Logement non trouvé</div>;
    }
    return (
        <main>
            <section>
                <Carrousel pictures={HousingData.pictures} />
                <div /* à la limite, je peux mettre <article> à la place de <div> ici */
                >
                    <div>
                        {/* Titre, lieu et tags */}
                        <HousingTitle>{HousingData.title}</HousingTitle>
                        <HousingLocation>
                            {HousingData.location}
                        </HousingLocation>
                        <HousingTagDiv>
                            {HousingData.tags.map((tag) => (
                                <Tag tags={tag} />
                            ))}
                        </HousingTagDiv>
                    </div>
                    <div>{/* Profil et note en étoiles */}</div>
                </div>
                <HousingCollapseDiv>
                    {/* Collapse */}
                    <Collapse
                        title="Description"
                        description={`${HousingData.description}`}
                    />
                    <Collapse
                        title="Équipements"
                        description={`${HousingData.equipments}`}
                    />
                </HousingCollapseDiv>
            </section>
        </main>
    );
}

export default Housing;
