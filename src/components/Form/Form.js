import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import TextInput from '../FormElem/TextInput';
import SelectInput from '../FormElem/SelectInput';
import RadioInput from '../FormElem/RadioInput';
import Button from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

const Form = ({ title, desc, formTitle, show, id, handleClose, cities, locations, phone, message, prayers }) => {

	const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

	let errorCount = Object.keys(errors).length;

	const onSubmit = (data) => {

		//TODO: handle form data 
		let formData = Object.assign({formTitle: formTitle}, data);
		console.log(formData);
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
						{ desc && <p className={styles.desc}>{desc}</p> }
						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<div className={styles.row}>
								<TextInput label="firstname" required register={register} errors={errors} />
								<TextInput label="lastname" required register={register} errors={errors} />
							</div>
							<div className={styles.row}>
								<TextInput label="email" required register={register} errors={errors}  />
								{ phone && 
									<TextInput label="phonenumber" register={register} errors={errors} />
								}
							</div>
							{
								message &&
								<textarea className={styles.textArea} {...register('message', { required: true } )} placeholder="Anything you'd like to tell us..." />
							}
							{
								cities && 
								<SelectInput label="city" options={["Bucharest", "Cluj"]} register={register} />
							}
							{
								locations && <RadioInput type="locations" register={register} />
							}
							{
								prayers && <RadioInput type="prayers" register={register} />
							}
							<div className={styles.buttonContainer}>
								{ errorCount > 0 && <div className={styles.errorMessage}>Required fields not completed</div> }
								<div className={classNames(styles.button, styles.cancel)} onClick={() => reset()}>cancel</div>
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