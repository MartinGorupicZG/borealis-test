import React from 'react';
import './Step3.scss';
import { ButtonNext, ButtonBack } from '../../buttons/Buttons';
import { Heading } from '../../Heading/Heading';

const Step3 = ({
	values,
	handleChange,
	errors,
	handleErrors,
	setStep,
	step,
}) => {
	console.log(values);
	return (
		<div>
			<Heading>3 Korak : Unesite svoje osobne podatke</Heading>
			<div className="info__div__container">
				<div key="info1" className="info__input__wrap">
					<input
						id="input1"
						className="info__input"
						required
						type="text"
						name="customerName"
						value={values.customerName}
						onChange={handleChange}
					></input>
					<label htmlFor="input1" className="info__input__label">
						Ime i prezime *
					</label>
					{errors.customerName && (
						<p className="userfields__error">{errors.customerName}</p>
					)}
				</div>

				<div key="info2" className="info__input__wrap">
					<input
						id="input2"
						className="info__input"
						required
						type="text"
						name="customerEmail"
						value={values.customerEmail}
						onChange={handleChange}
					></input>
					<label htmlFor="input2" className="info__input__label">
						Email *
					</label>
					{errors.customerEmail && (
						<p className="userfields__error">{errors.customerEmail}</p>
					)}
				</div>

				<div key="info3" className="info__input__wrap">
					<input
						id="input3"
						className="info__input"
						required
						type="text"
						name="customerPhone"
						value={values.customerPhone}
						onChange={handleChange}
					></input>
					<label htmlFor="input3" className="info__input__label">
						Telefon/Mobitel *
					</label>
					{errors.customerPhone && (
						<p className="userfields__error">{errors.customerPhone}</p>
					)}
				</div>

				<div key="info4" className="info__input__wrap">
					<input
						id="input4"
						className="info__input"
						required
						type="textarea"
						name="problemDescription"
						value={values.problemDescription}
						onChange={handleChange}
					></input>
					<label htmlFor="input4" className="info__input__label">
						Opišite problem
					</label>
				</div>

				<h5 className="info__bottom__message">
					Napomena polja označena sa ( * ) su obavezna!!!
				</h5>
			</div>
			<div className="description__div">
				<p className="description__text">{values.problemDescription}</p>
			</div>
			<ButtonBack
				onClick={() => {
					setStep(step - 1);
				}}
			>
				Nazad
			</ButtonBack>
			<ButtonNext onClick={handleErrors}>Dalje</ButtonNext>
		</div>
	);
};

export default Step3;
