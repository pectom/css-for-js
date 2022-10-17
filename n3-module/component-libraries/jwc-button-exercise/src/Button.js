import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const BUTTON_SIZES = {
  small: {
    "--fontSize": 16 / 16 + "rem",
    "--borderRadius": "2px",
    "--padding": "4px 12px",
  },
  medium: {
    "--fontSize": 18 / 16 + "rem",
    "--borderRadius": "4px",
    "--padding": "12px 20px"
  },
  large: {
    "--fontSize": 21 / 16 + "rem",
    "--borderRadius": "4px",
    "--padding": "16px 32px"
  },
}

const Base = styled.button`  
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontSize, 16px);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: solid transparent 2px;
  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(Base)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover{
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(Base)`
  background: ${COLORS.white};
  border: currentColor solid 2px;
  color: ${COLORS.primary};
  &:hover{
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(Base)`
  background: transparent;
  color: ${COLORS.transparentGray75};

  &:focus {
    outline-color: currentColor;
  }
  
  &:hover{
    background: ${COLORS.transparentGray15};
  }
`;


const Button = ({ variant, size, children }) => {
  const styles = BUTTON_SIZES[size]
  if(variant === "outline"){
    return <OutlineButton style={styles}>{children}</OutlineButton>
  }

  if(variant === "ghost"){
    return <GhostButton style={styles}>{children}</GhostButton>
  }

  return <FillButton style={styles}>{children}</FillButton>
};

export default Button;
