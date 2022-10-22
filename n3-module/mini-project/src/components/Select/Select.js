import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
      <Wrapper>
        <StyledSelect value={value} onChange={onChange}>
          {children}
       </StyledSelect>
        <SelectValuePresenter>
          {displayedValue}
          <StyledIcon style={{"--size": 24+"px"}}>
            <Icon id="chevron-down" size={24}/>
          </StyledIcon>
        </SelectValuePresenter>
      </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`
const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`

const StyledSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
`

const SelectValuePresenter = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  ${StyledSelect}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${StyledSelect}:hover + &{
    color: black;
  }
`


export default Select;
