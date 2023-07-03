import styles from './styles.module.scss';
import Image from 'next/image'
import classNames from 'classnames';

const HeroHalf = ({color, image, video, className, children}) => {
	return (
		<div className={classNames(styles.heroHalfContainer, className)}>
			<div className={classNames(styles.content, styles[color])}>
				{children}
			</div>
			<div className={styles.imageContainer} style={{backgroundImage: `url(/assets/images/${image}.jpg)`}}>
				{
					video && 
					<video className={classNames(styles.image, styles.video)} muted autoPlay loop>
					  <source src={`/assets/images/${video}.mp4`} type="video/mp4" />
					</video>
				}
			</div>
		</div>
	)
}

export default HeroHalf;