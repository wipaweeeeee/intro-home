import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import RadioInput from './RadioInput';
import Button from '../Button';

//TODO: submit doesnt work

const Form = () => {

	const { register, handleSubmit, formState: { errors }, } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<TextInput label="first name" />
			<TextInput label="last name" />
			<TextInput label="email" type="email" />
			<SelectInput label="city" options={['Bucharest', 'Cluj']}/>
			<RadioInput type="locations"/>
			<div className={styles.buttonContainer}>
				<div className={styles.button}>cancel</div>
				<input className={styles.button} type="submit" value="send" /> 
			</div>
		</form>
	)
}

export default Form;