import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const TextInput = ({register, label, required, errors}) => {

	let title;
	let placeholder;
	let error;
	let pattern;

	switch (label) {
		case 'firstname': 
			title = 'first name'
			placeholder = 'Mihai '
			error = errors.firstname
			pattern = ''
			break;
		case 'lastname': 
			title = 'last name'
			placeholder = 'Popescu'
			error = errors.lastname
			pattern = ''
			break;
		case 'phonenumber': 
			title = 'phoene number'
			placeholder = '+407*******'
			error = errors.phonenumber
			pattern = ''
			break;
		case 'email': 
			title = 'email'
			placeholder = 'mihaipopescu@mail.ro'
			error = errors.email
			pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
			break;
		default:
			title = 'text'
			placeholder = ''
	}

	return (
		<div className={
			classNames(
				styles.inputContainer, 
				{[styles.error] : error}, 
				{[styles.rightBorder] : label == 'firstname' }, 
				{[styles.leftBorder] : label == 'phonenumber'} 
		)}>
			<label className={classNames(
				styles.label, 
				{[styles.required] : required}
			)}>
				{title}
			</label>
	      	<input 
	      		{...register(title, { required: required, pattern: pattern } )} 
	      		placeholder={placeholder} 
	      		className={styles.input}
	      	/>
	      	{ error && error.type == 'pattern' && <div className={styles.errorMessage}>Invalid</div> }
    	</div>
	)
}

export default TextInput;