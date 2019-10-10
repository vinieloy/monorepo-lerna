import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  color: #868686;
  font-family: Arial, Verdana;
  font-size: 0.8rem;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: none;
  box-sizing: border-box;
  caret-color: #000;
  color: #000;
  display: block;
  font-size: 1rem;
  height: 40px;
  line-height: 26px;
  padding: 10px;
  margin: 0;
  width: 100%;

  ::placeholder {
    color: #999;
  }

  ${(props) =>
    props.disabled &&
    css`
      color: #999999;
      background-color: #fafafa;
      cursor: not-allowed;
    `}
`;

const Input = ({disabled, id, label, placeholder}) => (
  <StyledContainer>
    {label &&
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    }
    <StyledInput disabled={disabled} id={id} placeholder={placeholder} type="text" />
  </StyledContainer>
);

Input.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  disabled: false,
  id: '',
  label: '',
  placeholder: ''
};

export default Input;
