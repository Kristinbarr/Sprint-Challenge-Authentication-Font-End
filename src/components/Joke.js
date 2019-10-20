import React from 'react';

const Joke = props => {
	return (
		<div className="product">
			<h1 className="title">{props.singlejoke.joke}</h1>
		</div>
	);
};

export default Joke;
