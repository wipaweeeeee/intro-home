import styles from './styles.module.scss'
import classNames from 'classnames'

const Button = ({variant, children, className, onClick}) => {
	return (
		<button className={classNames(styles.button, styles[variant], className)} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button;