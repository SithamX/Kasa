import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HostDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const HostName = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colors.primary};
    font-size: 1.2em;
    text-align: right;
    margin-right: 10px;
    @media (max-width: 566px) {
        font-size: 1em;
    }
    @media (max-width: 425px) {
        font-size: 0.8em;
        margin-right: 13px;
    }
`;
const HostImage = styled.img`
    border-radius: 50%;
    height: 70px;
    @media (max-width: 425px) {
        height: 40px;
    }
`;
const FirstName = styled.span`
    white-space: nowrap;
`;

const LastName = styled.span`
    white-space: nowrap;
`;

function Host({ name, picture }) {
    const [firstName, lastName] = name.split(' ');

    return (
        <HostDiv>
            <HostName>
                <FirstName>{firstName}</FirstName>
                <LastName>{lastName}</LastName>
            </HostName>
            <HostImage src={picture} alt="Profil de l'hôte" />
        </HostDiv>
    );
}

export default Host;
