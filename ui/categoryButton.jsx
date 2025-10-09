import React from 'react';
import PropTypes from 'prop-types';

function CategoryButton({ category, active, onClick }) {
	const isActive = active === category;

	return (
		<button
			aria-pressed={isActive}
			role="tab"
			onClick={() => onClick(category)}
			className={`
				flex items-center gap-1
				px-4 py-2 rounded-lg font-semibold text-sm
				transition-all duration-200
				${isActive ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
			`}
		>
			{category}
		</button>
	);
}

CategoryButton.propTypes = {
	category: PropTypes.string.isRequired,
	active: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default CategoryButton;