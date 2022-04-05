import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, onChange, placeholder, value }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default Input
