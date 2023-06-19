import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

const Banner = ({color, icon, children}) => {
	return (
		<div className={classNames(styles.bannerContainer, styles[color])}>
			<Image
              	src={`/assets/images/${icon}.svg`}
              	alt={icon}
              	width={24}
              	height={24}
              	priority
              	className={styles.icon}
            />
			<span>{children}</span>
			<Image
              	src={`/assets/images/${icon}.svg`}
              	alt={icon}
              	width={24}
              	height={24}
              	priority
              	className={styles.icon}
            />
		</div>
	)
}

export default Banner;