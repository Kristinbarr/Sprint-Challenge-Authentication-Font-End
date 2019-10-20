import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
	return (
		<div className="navigation">
			<NavLink to="/">Jokes</NavLink>
			<NavLink to="/auth/register">Sign Up</NavLink>
			<NavLink to="/auth/login">Login</NavLink>
		</div>
	);
};

export default Navigation;
