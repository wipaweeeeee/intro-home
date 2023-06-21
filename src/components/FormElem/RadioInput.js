import styles from './styles.module.scss';
import { useForm } from "react-hook-form";

const RadioInput = ({ type, register }) => {

	let options = [];
	if (type == 'locations') {
		options = [ "on-site", "online", "international" ];
	}

	let optionItems = options.map((item, index) => {
		return (
			<label key={index} className={styles.label}>
				<input type="radio" {...register(type)} value={item} id={`field-${item}`}/>
				<span>{item}</span>
			</label>
		)
	})

	return (
		<div className={styles.radioContainer}>
			{optionItems}
		</div>
	)
}

export default RadioInput;