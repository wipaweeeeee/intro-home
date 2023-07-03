import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import AnimateDiv from '../AnimateDiv';

const ContentHalf = ({color, image, children}) => {
	return (
		<div className={classNames(styles.contentHalfContainer, styles[color])}>
			<AnimateDiv className={styles.imageContainer}>
				<Image
	              	src={`/assets/images/${image}.jpg`}
	              	alt={image}
	              	width={450}
	              	height={450}
	              	priority
	              	className={styles.image}
	            />
			</AnimateDiv>
			<AnimateDiv className={styles.content}>{children}</AnimateDiv>
		</div>
	)
}

export default ContentHalf;