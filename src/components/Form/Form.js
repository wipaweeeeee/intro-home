import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import TextInput from '../FormElem/TextInput';
import SelectInput from '../FormElem/SelectInput';
import RadioInput from '../FormElem/RadioInput';
import Button from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

//TODO: add required, validation? potentially animate presence is the problem

const Form = ({ title, desc, formTitle, show, id, handleClose, cities, locations, phone, message }) => {

	const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, } = useForm();

	const onSubmit = (data, errors) => {
		if (isSubmitSuccessful) {
			let formData = Object.assign({formTitle: formTitle}, data);
			console.log(formData);
		} else {
			console.log('error')
		}
	}

	return (
		<AnimatePresence>
		{
			show && (
				<motion.div
					id={"form for " + id}
					className={styles.formContainer}
					initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' }}}
                    exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeOut' }}}
				>
					<img src="/assets/images/close.svg" className={styles.close} onClick={() => {handleClose(); reset();}}/>
					<div className={styles.formFields}>
						<div className={styles.intro}>
							<h3 className="body-2 caps">{title}</h3>
						</div>
						<p className={styles.desc}>{desc}</p>
						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<div className={classNames(styles.row, styles.half)}>
								<TextInput label="first name" register={register} />
								<TextInput label="last name" register={register} />
							</div>
							<div className={classNames(styles.row, {[styles.half] : phone})}>
								<TextInput label="email" type="email" register={register} />
								{ phone && 
									<TextInput label="phoneNumber" register={register} />
								}
							</div>
							{
								cities && 
								<SelectInput label="city" options={["Bucharest", "Cluj"]} register={register} />
							}
							{
								locations && <RadioInput type="locations" register={register} />
							}
							
							<div className={styles.buttonContainer}>
								<div className={styles.button} onClick={() => reset()}>cancel</div>
								<input className={styles.button} type="submit" value="send" /> 
							</div>
						</form>
					</div>
				</motion.div>
			)
		}
		</AnimatePresence>
	)
}

export default Form;