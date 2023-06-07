import styles from './styles.module.scss';
import Image from 'next/image'
import classNames from 'classnames';

const HeroHalf = ({color, children}) => {
	return (
		<div className={styles.heroHalfContainer}>
			<div className={classNames(styles.content, styles[color])}>
				{children}
			</div>
			<div className={styles.imageContainer}>
				<Image
	              	src="/assets/images/welcomeHome.png"
	              	alt="welcomeHome"
	              	width={720}
	              	height={688}
	              	priority
	              	className={styles.image}
	            />
			</div>
		</div>
	)
}

export default HeroHalf;