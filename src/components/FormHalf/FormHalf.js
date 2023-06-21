import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import TextInput from '../FormElem/TextInput';
import SelectInput from '../FormElem/SelectInput';
import RadioInput from '../FormElem/RadioInput';
import Button from '../Button';

const FormHalf = ({ title, desc, formTitle }) => {

	const { register, handleSubmit, formState: { errors }, } = useForm();

	const onSubmit = (data) => {
		let formData = Object.assign({formTitle: formTitle}, data);
		console.log(formData);
	}

	return (
		<div className={styles.formHalfContainer}>
			<div className={styles.intro}>
				<h3 className="body-2 caps">{title}</h3>
				<p>{desc}</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.row}>
					<TextInput label="first name" register={register} />
					<TextInput label="last name" register={register} />
				</div>
				<TextInput label="email" type="email" register={register} />
				<SelectInput label="city" options={['Bucharest', 'Cluj']} register={register} />
				<RadioInput type="locations" register={register} />
				<div className={styles.buttonContainer}>
					<div className={styles.button}>cancel</div>
					<input className={styles.button} type="submit" value="send" /> 
				</div>
			</form>
		</div>
	)
}

export default FormHalf;