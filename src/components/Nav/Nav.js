import React from 'react';
import './Nav.scss';
import { FaTimes } from 'react-icons/fa';
const Nav = ({ openModal, setOpenModal }) => {
	return (
		<div className="Nav">
			<h2 className="Nav__heading">KONFIGURATOR SERVISA</h2>
			<FaTimes className="Nav__icon" onClick={() => setOpenModal(!openModal)} />
		</div>
	);
};

export default Nav;
