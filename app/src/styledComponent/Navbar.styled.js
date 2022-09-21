
import styled from "styled-components";
import  { mobile, tablet } from '../responsive'
export const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
${tablet({height: "50px"})}

`;
export const Wrapper = styled.div`
display: flex;
padding: 10px 29px;
justify-content: space-between;
align-items: center;
${mobile({height: "50px"})}
${tablet({height: "50px"})}
`;
export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
export const Language = styled.select`
cursor: pointer;
font-size: 14px;
border: none;
${mobile({display: "none"})}
`;
export const Option = styled.option`
`
export const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
export const Input = styled.input`
border: none;
${mobile({width: '50px'})}
`;
export const Center = styled.div`
flex: 1;
text-align: center;
`;
export const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
${mobile({fontSize: '24px'})}
`;
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2,justifyContent: 'center'})}
`;
export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({marginLeft: "10px"})}
`
