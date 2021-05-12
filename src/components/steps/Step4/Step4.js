import React from 'react';
import './Step4.scss';
import { Heading } from '../../Heading/Heading';
import { ButtonNext, ButtonBack } from '../../buttons/Buttons';
import { FaEdit } from 'react-icons/fa';
import service from '../../../data/service';

const Step4 = ({
	values,
	isChecked,
	isCuponValid,
	step,
	setStep,
	total,
	discount,
}) => {
	return (
		<div className="checkoutcontainer">
			<Heading>Korak broj 4 : Pregled i potvrda vaših podataka</Heading>
			<p className="checkoutcontainer__p">
				Molimo vas da još jednom pregledate i potvrdite unesene podatke.Ukoliko
				želite promjeniti neki unos, možete kliknuti na gumb za uređivanje pored
				svake od kategorija.Kada ste provjerili i potvrdili vaš unos kliknite na
				gumb pošalji na dnu,za slanje unosa na servis.
			</p>
			<div className="infocontainer">
				<div className="info">
					<h4 className="info__text">proizvođač : {values.carModel}</h4>
					<FaEdit className="info__icon" onClick={() => setStep(1)} />
				</div>
				<div className="info__personal">
					<h4 className="info__personal__text">osobni podatci</h4>
					<FaEdit className="info__icon" onClick={() => setStep(3)} />
				</div>
				<div className="personal">
					<h4 className="data__text">
						ime i prezime : <span>{values.customerName}</span>
					</h4>
					<h4 className="data__text">
						email : <span>{values.customerEmail}</span>
					</h4>
					<h4 className="data__text">
						telefon / mobitel : <span>{values.customerPhone}</span>
					</h4>
					<h4 className="data__text">
						opis problema : <span>{values.problemDescription}</span>
					</h4>
				</div>
				<div className="chosen__service">
					<div className="info__service">
						<h4 className="info__service__text">odabrane usluge</h4>
						<FaEdit
							className="info__icon__service"
							onClick={() => setStep(2)}
						/>
					</div>
					<div className="chosen__service__wrap">
						{isChecked.isFilter && (
							<h5 className="service">
								{service[0].service} : <span>{service[0].price}</span> Kn
							</h5>
						)}

						{isChecked.isBreaks && (
							<h5 className="service">
								{service[1].service} : <span>{service[1].price}</span> Kn
							</h5>
						)}
						{isChecked.isTyers && (
							<h5 className="service">
								{service[2].service} : <span>{service[2].price}</span> Kn
							</h5>
						)}
						{isChecked.isVentilation && (
							<h5 className="service">
								{service[3].service} : <span>{service[3].price}</span> Kn
							</h5>
						)}
						{isChecked.isBalans && (
							<h5 className="service">
								{service[4].service} : <span>{service[4].price}</span> Kn
							</h5>
						)}
						{isChecked.isOil && (
							<h5 className="service">
								{service[5].service} : <span>{service[5].price}</span> Kn
							</h5>
						)}
					</div>

					<div className="info__total">
						{isCuponValid && (
							<h3 className="info__total__discount">
								Popust (30%) : - {(total - discount).toFixed(2)} Kn
							</h3>
						)}
						<h3 className="info__total__price">
							ukupno : {total.toFixed(2)} Kn
						</h3>
					</div>
				</div>
			</div>
			<ButtonBack onClick={() => setStep(3)}>Nazad</ButtonBack>
			<ButtonNext onClick={() => setStep(5)}>Pošalji</ButtonNext>
		</div>
	);
};

export default Step4;
