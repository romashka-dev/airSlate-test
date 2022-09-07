// Валидация для полей формы
const validate = new window.JustValidate('#form');

validate
	.addField('#formMail', [
		{
			rule: 'required',
			errorMessage: 'The field is required',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: 'The field must contain a minimum of 3 characters',
		},
		{
			rule: 'email',
			errorMessage: 'Email is invalid!',
		},
	])
	.addField('#formPassword', [
		{
			rule: 'required',
			errorMessage: 'The field is required',
		},
		{
			rule: 'password',
			errorMessage: 'Minimum eight characters, at least one letter and one number',
		},
		{
      rule: 'minLength',
      value: 8,
			errorMessage: 'The field must contain a minimum of 3 characters',
    },
	])
