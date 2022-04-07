import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder, name, value, onChange}) => (
  <div>
    <input type={type} name={name} value={value} className={className} placeholder={placeholder} onChange = {onChange}/>
  </div>
);

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default Input;
