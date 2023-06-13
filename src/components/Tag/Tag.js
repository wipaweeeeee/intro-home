import styles from './styles.module.scss'
import classNames from 'classnames'

const Tag = ({ children, variant = 'default', className }) => {
	return (
		<div className={classNames(styles.tag, styles[variant], className)}>{children}</div>
	)
}

export default Tag;