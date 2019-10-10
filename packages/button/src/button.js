import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: red;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      color: #999
      background-color: #fafafa;
      cursor: not-allowed;
    `}
`;

Button.propTypes = {
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
