/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const ProgressContainer = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding, 0px);
  border-radius: var(--border, 4px);
`
const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`
const ProgressValue = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`
const STYLES = {
  small: {
    "height": '8px',
  },
  medium: {
    "height": '12px'
  },
  large: {
    "height": '16px',
    "padding": "4px",
    "border": "8px"
}
}
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  if(styles === undefined){
    throw new Error("No matching style for the size")
  }
  return <ProgressContainer
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{"--padding": styles.padding, "--border": styles.border }}>
    <BarWrapper>
      <ProgressValue style={{"--width": value + "%", "--height": styles.height}}/>
    </BarWrapper>
    <VisuallyHidden>{value}%</VisuallyHidden>
  </ProgressContainer>
};

export default ProgressBar;
