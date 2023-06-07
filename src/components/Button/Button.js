import styles from './styles.module.scss'
import classNames from 'classnames'

const Button = ({variant, children}) => {
	return (
		<button className={classNames(styles.button, styles[variant])}>
			{children}
		</button>
	)
}

export default Button;