import { useState, useEffect } from 'react';

const useForm = (validateForm) => {
	const [step, setStep] = useState(1);
	const [total, setTotal] = useState(0);
	const [discount, setDiskount] = useState(0);
	const [isCuponValid, setIsCuponValid] = useState(false);
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		carModel: '',
		customerName: '',
		customerEmail: '',
		customerPhone: '',
		problemDescription: '',
		cuponCode: '',
	});

	const [isChecked, setIsChecked] = useState({
		isFilter: false,
		isBreaks: false,
		isTyers: false,
		isVentilation: false,
		isBalans: false,
		isOil: false,
	});

	const handleChange = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleChecked = ({ target: { name, checked } }) => {
		setIsChecked({
			...isChecked,
			[name]: checked,
		});
	};

	const handleErrors = (e) => {
		e.preventDefault();
		setErrors(validateForm(values, step, setStep, isChecked));
	};

	const checkTotal = (e) => {
		const { checked, value } = e.target;
		checked
			? setTotal(total + parseInt(value))
			: setTotal(total - parseInt(value));
	};

	useEffect(() => {
		if (values.cuponCode.toLowerCase() === 'tokić123') {
			setIsCuponValid(true);
		} else {
			setIsCuponValid(false);
		}
	}, [values.cuponCode]);

	useEffect(() => {
		if (isCuponValid) {
			const discount = 30 / 100;
			const totalDiscount = total - total * discount;
			setDiskount(totalDiscount);
		} else {
			setDiskount(0);
		}
	}, [total, isCuponValid]);

	return {
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
	};
};
export default useForm;
