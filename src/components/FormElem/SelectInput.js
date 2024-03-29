import styles from './styles.module.scss';
import { useForm } from "react-hook-form";

const SelectInput = ({ label, options, register }) => {

	let optionItems = options.map((item, index) => {
		return (
			<option key={index} value={item}>{item}</option>
		)
	})

	return (
		<div className={styles.selectContainer}>
			<label className={styles.label}>
				<span>{label}</span>
				<select {...register(label)}>
					<option value="none" defaultValue>Choose a city</option>
					{optionItems}
				</select>
			</label>
		</div>
	)
}

export default SelectInput;