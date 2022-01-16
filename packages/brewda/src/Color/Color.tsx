import React from "react";
import styled from "styled-components";

export interface ColorInfoProps {
  hex: string;
  name: string;
  hexName?: string;
  width?: string | number;
  height?: string | number;
}

const StlyedDiv = styled.div`
  display: grid;
  gap: 5px;
`;

const ColorInfo: React.FC<ColorInfoProps> = ({
  hex,
  hexName,
  name,
  width = 150,
  height = 25,
}) => {
  const ColorBox = styled.div`
    width: ${typeof width === "number" ? `${width}px` : width};
    height: ${typeof height === "number" ? `${height}px` : height};
    background-color: ${hex};
  `;
  return (
    <StlyedDiv>
      <ColorBox />
      <div>
        <div>{name}</div>
        {hexName ? <div>{hexName}</div> : <div>{hex}</div>}
      </div>
    </StlyedDiv>
  );
};

export default ColorInfo;
