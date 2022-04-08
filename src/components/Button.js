import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className }) => (
  <>
    <button type="button" onClick={onClick} className={className}>{children}</button>
  </>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};

export default Button;
