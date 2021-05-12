import React from 'react';
import './Buttons.scss';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
export const ButtonNext = ({ children, type, onClick }) => {
	return (
		<button type={type} onClick={onClick} className="buttonNext">
			{children} <FaAngleRight className="button__icon__next" />
		</button>
	);
};
export const ButtonBack = ({ children, type, onClick }) => {
	return (
		<button type={type} onClick={onClick} className="buttonBack">
			<FaAngleLeft className="button__icon__back" /> {children}
		</button>
	);
};
