import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder }) => (
  <div>
    <input type={type} className={className} placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
