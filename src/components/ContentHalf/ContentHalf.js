import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

const ContentHalf = ({color, image, children}) => {
	return (
		<div className={classNames(styles.contentHalfContainer, styles[color])}>
			<div className={styles.imageContainer}>
				<Image
	              	src={`/assets/images/${image}.jpg`}
	              	alt={image}
	              	width={450}
	              	height={450}
	              	priority
	              	className={styles.image}
	            />
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default ContentHalf;