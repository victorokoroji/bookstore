import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, placeholder}) => {
	return (
		<div>
			<input
				type={type}
				name={name}
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
}

export default Input
