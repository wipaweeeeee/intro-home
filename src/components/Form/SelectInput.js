import styles from './styles.module.scss';
import { useForm } from "react-hook-form";

const SelectInput = ({ label, options }) => {

	const { register } = useForm();

	let optionItems = options.map((item, index) => {
		return (
			<option key={index} value={item}>{item}</option>
		)
	})

	return (
		<label className={styles.label}>
			<span>{label}</span>
			<select {...register(label)}>
				<option value="none" defaultValue>Choose a city</option>
				{optionItems}
			</select>
		</label>
	)
}

export default SelectInput;