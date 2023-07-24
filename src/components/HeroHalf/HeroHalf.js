import styles from './styles.module.scss';
import Image from 'next/image'
import classNames from 'classnames';
import { motion } from "framer-motion";

const HeroHalf = ({color, image, video, className, children}) => {
	return (
		<div className={classNames(styles.heroHalfContainer, className)}>
			<div className={classNames(styles.content, styles[color])}>
				{children}
			</div>
			<div 
				className={styles.imageContainer} 
				style={{ backgroundImage: image ? `url(/assets/images/${image}.jpg)` : null }}
			>
				{
					video && 
					<video className={classNames(styles.image, styles.video)} muted autoPlay loop>
					  <source src={`/assets/videos/${video}.mp4`} type="video/mp4" />
					</video>
				}
			</div>
		</div>
	)
}

export default HeroHalf;