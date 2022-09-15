import React from 'react'
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'
const Container = styled.div`
height: 30px;
background-color: teal;
color:  white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;

`
 function Announce(props) {
    const { t, i18n } = useTranslation();

    return (
        <Container>
           {t("super")}
            
        </Container>
    )
}
export default Announce