import React from "react";
import Character from "./Character";
import styled from "styled-components";

const StyledContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 3px;
`;

export default function CharacterList(props) {
  const { characterData } = props;
  //console.log(`props from CharacterList ${characterData}`);
  return (
    <StyledContainerDiv>
      {characterData.map((char) => {
        return (
          <div>
            <Character char={char} key={char.name} />
          </div>
        );
      })}
    </StyledContainerDiv>
  );
}
