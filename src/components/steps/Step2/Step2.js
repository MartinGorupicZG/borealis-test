import React from 'react';
import './Step2.scss';
import service from '../../../data/service';
import checkboxes from '../../../data/checkboxex';

import { Heading } from '../../Heading/Heading';
import { ButtonNext, ButtonBack } from '../../buttons/Buttons';

const Step2 = ({
	isChecked,
	handleChecked,
	checkTotal,
	total,
	discount,
	step,
	handleErrors,
	setStep,
	errors,
	values,
	handleChange,
	isCuponValid,
}) => {
	return (
		<div className="top__div">
			<Heading>2 Korak : odaberite jednu ili više usluga</Heading>
			<div className="container">
				<div className="container__top">
					{checkboxes.map((item, i) => {
						return (
							<div
								key={item.key}
								className="checkboxes__container"
								onChange={checkTotal}
							>
								<input
									id={item.htmlFor}
									className={
										isCuponValid ? 'checkbox__input valid' : 'checkbox__input'
									}
									type="checkbox"
									name={item.name}
									checked={isChecked[item.name] === true}
									onChange={handleChecked}
									value={service[i].price}
								/>
								<label className="checkbox__label" htmlFor={item.htmlFor} />
								<h3 className="checkboxex__text">
									{service[i].service} cijena : {service[i].price} Kn
								</h3>
							</div>
						);
					})}
				</div>
				<div className="container__bottom">
					<div className="price__wrap">
						{discount > 0 && (
							<div className="total__if__diskount">OSNOVICA : {total}</div>
						)}
						{discount > 0 && (
							<div className="discount">
								{' '}
								Popust ( 30%) - {(total - discount).toFixed(2)} Kn
							</div>
						)}
						<div className="total">
							UKUPNO : {discount > 0 ? discount.toFixed(2) : total.toFixed(2)}{' '}
							Kn
						</div>
					</div>
					<div className="cupon__input__wrap">
						<input
							id="input5"
							className="info__input"
							required
							type="text"
							name="cuponCode"
							value={values.cuponCode}
							onChange={handleChange}
						></input>
						<label
							htmlFor="input5"
							className={
								isCuponValid
									? 'info__input__label  active'
									: 'info__input__label'
							}
						>
							{isCuponValid ? 'Ispravan Kupon' : 'Imaš kupon?'}
						</label>
					</div>
				</div>
				{errors.checkbox && <p className="chekboxerror">{errors.checkbox}</p>}
			</div>
			<ButtonNext onClick={handleErrors}>Dalje</ButtonNext>
			<ButtonBack onClick={() => setStep(step - 1)}>Nazad</ButtonBack>
		</div>
	);
};

export default Step2;
