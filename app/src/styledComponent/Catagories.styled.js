import {mobile, tablet} from '../responsive'

import styled from "styled-components";
export const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding: "0px", flexDirection: 'column'})}
${tablet({padding: "0px", flexDirection: 'column'})}

`