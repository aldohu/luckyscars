import React from 'react';
// Assuming you have a CSS file for styles
import './categories.styles.scss'; // Assuming you have a CSS file for categories styles

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'hatchback',
			imageUrl: 'https://i.imgur.com/3Q1JjzL.png', // Simple hatchback
		},
		{
			id: 2,
			title: 'saloon',
			imageUrl: 'https://i.imgur.com/5t5uW7v.png', // Simple saloon
		},
		{
			id: 3,
			title: 'SUV',
			imageUrl: 'https://i.imgur.com/VvJgZ3P.png', // Simple SUV
		},
		{
			id: 4,
			title: 'coupe',
			imageUrl: 'https://i.imgur.com/7QY9jJk.png', // Simple coupe
		},
		{
			id: 5,
			title: 'convertible',
			imageUrl: 'https://i.imgur.com/2T7JtN2.png', // Simple convertible
		},
	];
	return (
		<div className="categories-container">
			{categories.map(({ title, id, imageUrl }) => (
				<div
					className="category-container"
					key={id}
				>
					<div
						className="background-image"
						style={{ backgroundImage: `url(${imageUrl})` }}
					/>
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
