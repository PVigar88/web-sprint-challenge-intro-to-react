// Write your Character component here
import React from "react";
import styled from "styled-components";
import Collabsible from "react-collapsible";

const StyledPar = styled.p`
  color: ${(props) => props.theme.primaryTheme.primaryColor};
  line-height: ${(props) => props.theme.primaryTheme.lineHeight};
  font-size: ${(props) => props.theme.primaryTheme.fontSize};
`;
const StyledDiv = styled.div`
  color: ${(props) => props.theme.primaryTheme.primaryColor};
  background-image: url(${(props) => props.theme.primaryTheme.spaceImage});
  width: 600px;
  border: 3px solid ${(props) => props.theme.primaryTheme.primaryColor};
  border-radius: 5%;
  margin: 15px;
`;

export default function Character(props) {
  const { char } = props;

  return (
    <StyledDiv className="characterDetails">
      <h2>{char.name}</h2>
      <Collabsible
        trigger="expand"
        triggerWhenOpen="collapse"
        className="characterStats"
      >
        <StyledPar>Height: {char.height}cm</StyledPar>
        <StyledPar>Mass: {char.mass}kg</StyledPar>
        <StyledPar>Hair Color: {char.hair_color}</StyledPar>
        <StyledPar>Skin Color: {char.skin_color}</StyledPar>
        <StyledPar>Eye Color: {char.eye_color}</StyledPar>
        <StyledPar>Birth Year: {char.birth_year}</StyledPar>
        <StyledPar>Gender: {char.gender}</StyledPar>
      </Collabsible>
    </StyledDiv>
  );
}
