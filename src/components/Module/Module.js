import React from 'react';
import './Module.scss';
import Nav from '../Nav/Nav';
import MainComponent from '../MainComponent/MainComponent';

const Module = (props) => {
	return (
		<div className="background">
			<Nav {...props} />
			<MainComponent />
		</div>
	);
};

export default Module;
