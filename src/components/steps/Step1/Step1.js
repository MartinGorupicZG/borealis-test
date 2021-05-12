import React, { useState } from 'react';
import './Step1.scss';
import { Heading } from '../../Heading/Heading';
import { ButtonNext, ButtonBack } from '../../buttons/Buttons';
import images from '../../../data/images';
import radios from '../../../data/radios';

const Step1 = ({ handleChange, values, handleErrors, errors }) => {
	console.log(errors);
	return (
		<div className="step1">
			<Heading>1 Korak : Odaberite proizvođača</Heading>
			<div className="step1__container">
				{radios.map((item, i) => {
					return (
						<div key={item.key} className="radio__container">
							<label className="radio__label" htmlFor={item.id}>
								<input
									className="radio__input"
									type="radio"
									name="carModel"
									value={item.value}
									checked={values.carModel === item.value}
									id={item.id}
									onChange={handleChange}
								/>
								<img className="radio__img" src={images[i]} alt={item.name} />
							</label>
							<p className="radio__p">{item.value}</p>
						</div>
					);
				})}
			</div>

			<h2 className="step1__choice__text">
				Odabrali ste : <span> {values.carModel}</span>
			</h2>
			{errors.carModel && <p className="carError">{errors.carModel}</p>}
			<ButtonNext onClick={handleErrors}>Dalje</ButtonNext>
			<ButtonBack>Nazad</ButtonBack>
		</div>
	);
};

export default Step1;
