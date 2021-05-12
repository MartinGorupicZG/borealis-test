import React from 'react';

import Step1 from '../steps/Step1/Step1';
import Step2 from '../steps/Step2/Step2';
import Step3 from '../steps/Step3/Step3';
import Step4 from '../steps/Step4/Step4';
import Step5 from '../steps/Step5/Step5';
import useForm from '../../hooks/useForm';
import validateForm from '../../hooks/validateForm';

const MainComponent = () => {
	const {
		handleChecked,
		handleChange,
		setTotal,
		setDiskount,
		setStep,
		step,
		values,
		isChecked,
		total,
		discount,
		handleErrors,
		errors,
		checkTotal,
		isCuponValid,
	} = useForm(validateForm);

	switch (step) {
		case 1:
			return (
				<Step1
					handleChange={handleChange}
					values={values}
					handleErrors={handleErrors}
					errors={errors}
				/>
			);
		case 2:
			return (
				<Step2
					isChecked={isChecked}
					handleChecked={handleChecked}
					checkTotal={checkTotal}
					total={total}
					discount={discount}
					step={step}
					handleErrors={handleErrors}
					setStep={setStep}
					errors={errors}
					isCuponValid={isCuponValid}
					handleChange={handleChange}
					values={values}
				/>
			);

		case 3:
			return (
				<Step3
					values={values}
					handleChange={handleChange}
					errors={errors}
					handleErrors={handleErrors}
					setStep={setStep}
					step={step}
				/>
			);
		case 4:
			return (
				<Step4
					values={values}
					setStep={setStep}
					isChecked={isChecked}
					isCuponValid={isCuponValid}
					total={total}
					discount={discount}
				/>
			);
		case 5:
			return <Step5 />;

		default:
			<div>Nešto ne valja!</div>;
	}
};

export default MainComponent;
