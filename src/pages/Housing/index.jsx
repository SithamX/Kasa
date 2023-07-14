import { useParams } from 'react-router-dom';
import Error from '../Error';
import Carrousel from '../../components/Carrousel';
import housings from '../../datas/housing.json';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Tag from '../../components/Tag';
import StarRating from '../../components/Rating';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';

const HousingDivInformations = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0 25px 0;
    @media (max-width: 566px) {
        flex-direction: column;
    }
    @media (max-width: 375px) {
        margin-top: 10px;
    }
`;
const HousingTitle = styled.h1`
    color: ${colors.primary};
    font-size: 2.3em;
    margin: 0 0 5px 0;
    @media (max-width: 375px) {
        font-size: 1.1em;
    }
`;
const HousingLocation = styled.p`
    color: ${colors.primary};
    font-size: 1.2em;
    margin-top: 0;
    @media (max-width: 375px) {
        font-size: 0.9em;
        margin-top: 10px;
    }
`;
const HousingTagDiv = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;
const HousingHostStarsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: 566px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
`;
const HousingCollapseDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    margin-bottom: 10px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;
const CollapseDescriptionParagraph = styled.p`
    font-size: 1.1em;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    border-radius: 0 0 5px 5px;
    @media (max-width: 1024px) {
        font-size: 1em;
    }
    @media (max-width: 490px) {
        font-size: 0.8em;
    }
`;
const HousingCollapseLi = styled.li`
    list-style: none;
    padding-left: 0;
    font-size: 1.1em;
    line-height: 1.4;
    @media (max-width: 768px) {
        font-size: 1.1em;
    }
    @media (max-width: 490px) {
        font-size: 0.8em;
    }
`;

function Housing() {
    const { id } = useParams();
    const housingData = housings.find((housing) => housing.id === id);
    if (!housingData) {
        return <Error />;
    }

    const dataEquipments = housingData.equipments.map((equipement, index) => (
        <HousingCollapseLi key={index} className="equipList">
            {equipement}
        </HousingCollapseLi>
    ));

    return (
        <main>
            <section>
                <Carrousel pictures={housingData.pictures} />
                <HousingDivInformations /* à la limite, je peux mettre <article> à la place de <div> ici */
                >
                    <div>
                        {/* Titre, lieu et tags */}
                        <HousingTitle>{housingData.title}</HousingTitle>
                        <HousingLocation>
                            {housingData.location}
                        </HousingLocation>
                        <HousingTagDiv>
                            {housingData.tags.map((tag) => (
                                <Tag key={tag} tags={tag} />
                            ))}
                        </HousingTagDiv>
                    </div>
                    <HousingHostStarsDiv>
                        {/* Profil et note en étoiles */}
                        <Host
                            name={housingData.host.name}
                            picture={housingData.host.picture}
                        />
                        <StarRating rating={parseInt(housingData.rating)} />
                    </HousingHostStarsDiv>
                </HousingDivInformations>
                <HousingCollapseDiv>
                    {/* Collapse */}
                    <Collapse
                        title="Description"
                        description={
                            <CollapseDescriptionParagraph>
                                {housingData.description}
                            </CollapseDescriptionParagraph>
                        }
                    />
                    <Collapse
                        title="Équipements"
                        description={dataEquipments}
                    />
                </HousingCollapseDiv>
            </section>
        </main>
    );
}

export default Housing;
