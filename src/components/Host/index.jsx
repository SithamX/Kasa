import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HostDiv = styled.div`
    display: flex;
`;
const HostName = styled.span`
    color: ${colors.primary};
    font-size: 1.2em;
    text-align: right;
    width: 30px;
    margin-right: 85px;
`;
const HostImage = styled.img`
    border-radius: 50%;
    width: 70px;
`;

function Host({ name, picture }) {
    return (
        <HostDiv>
            <HostName>{name}</HostName>
            <HostImage src={picture} alt="Profil de l'hôte" />
        </HostDiv>
    );
}

export default Host;
