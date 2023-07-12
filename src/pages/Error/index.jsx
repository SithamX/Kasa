import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ErrorPageSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NumberError = styled.h1`
    color: ${colors.primary};
    font-size: 18em;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 0;
    @media (max-width: 1024px) {
        font-size: 10em;
    }
    @media (max-width: 490px) {
        font-size: 6em;
        margin-top: 150px;
    }
`;
const DescriptionError = styled.h2`
    color: ${colors.primary};
    padding: 0 20px;
    text-align: center;
    font-size: 2em;
    @media (max-width: 1024px) {
        font-size: 1.4em;
    }
    @media (max-width: 490px) {
        font-size: 1.2em;
        margin-top: 5px;
    }
`;
const ErrorLink = styled(Link)`
    color: ${colors.primary};
    margin: 110px 0;
    @media (max-width: 490px) {
        font-size: 0.9em;
    }
`;

function Error() {
    return (
        <main>
            <ErrorPageSection>
                <NumberError>404</NumberError>
                <DescriptionError>
                    Oups! La page que vous demandez n'existe pas.
                </DescriptionError>
                <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
            </ErrorPageSection>
        </main>
    );
}

export default Error;
