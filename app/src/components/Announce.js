import React from 'react'
import { Container } from '../styledComponent/Announce.styled';
import {useTranslation} from 'react-i18next'


 function Announce(props) {
    const { t, i18n } = useTranslation();

    return (
        <Container>
           {t("super")}
            
        </Container>
    )
}
export default Announce