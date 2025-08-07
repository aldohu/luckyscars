import React from 'react';
// Assuming you have a CSS file for styles
import './categories.styles.scss'; // Assuming you have a CSS file for categories styles

const App = () => {
	const categories = [
		{
			title: 'hatchbacks',
			id: 1,
			image:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			title: 'sedans',
			id: 2,
			image:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			title: 'suv',
			id: 3,
			image:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			title: 'crossover',
			id: 4,
			image:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			title: 'roadster',
			id: 5,
			image:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
	];
	return (
		<div className="categories-container">
			{categories.map(({ title, id }) => (
				<div
					className="category-container"
					key={id}
				>
					<div className="background-image" />
					<div className="category-body-container">
						<h2 className="category-title">{title}</h2>
						<p>Buy now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
