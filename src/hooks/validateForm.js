export default function validateForm(values, step, setStep, isChecked) {
	let errors = {};

	if (step === 1) {
		if (values.carModel === '') {
			errors.carModel = 'Odabir je obavezan !';
		} else {
			setStep(step + 1);
		}
	}

	if (step === 2) {
		if (Object.values(isChecked).includes(true)) {
			setStep(step + 1);
		} else {
			errors.checkbox = 'Obavezan odabir usluge!!';
		}
	}

	if (step === 3) {
		if (values.customerName === '') {
			errors.customerName = 'Ovo polje je obavezno !!';
		}

		if (values.customerEmail === '') {
			errors.customerEmail = 'Ovo polje je obavezno !';
		} else if (!/\S+@\S+\.\S+/.test(values.customerEmail)) {
			errors.customerEmail = 'Unesite valjanu email adresu';
		}

		if (values.customerPhone.length === 0) {
			errors.customerPhone = 'Ovo polje je obavezno !';
		} else if (isNaN(values.customerPhone)) {
			errors.customerPhone = 'Unesite važeči telefonski broj !!';
		} else {
			setStep(step + 1);
		}
	}

	console.log(step, 'from validate');
	return errors;
}
