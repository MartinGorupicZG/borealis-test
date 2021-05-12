const input = [
	{
		key: '1',
		type: 'text',
		htmlFor: 'customerName',
		id: 'customerName',
		name: 'customerName',
		onChange: 'handleChange',
		value: 'values.customerName',
		labelText: 'Ime i prezime',
		className: `{
            values.customerName.length > 3
                ? 'info__input valid'
                : 'info__input'
        }`,
	},
];

export default input;
