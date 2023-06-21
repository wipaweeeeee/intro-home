import styles from './styles.module.scss';
import { useForm } from "react-hook-form";

const TextInput = ({ label, type = "text", register }) => {

	let placeholder;
	if (label == "first name") {
		placeholder = "Mihai"
	} else if (label == "last name") {
		placeholder = "Popescu"
	} else if (label == "email") {
		placeholder = "mihaipopescu@mail.ro"
	} else {
		placeholder = ""
	}

	return (
		<label className={styles.label}>
			<span>{label}</span>
			<input {...register(label)} type={type} placeholder={placeholder}/>
		</label>
	)
}

export default TextInput;