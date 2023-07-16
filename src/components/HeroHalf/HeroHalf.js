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
			<motion.div 
				initial={{ opacity: 0 }}
        		whileInView={{ opacity: 1, transition: { duration: 0.45, ease: 'easeIn' }}}
        		viewport={{ once: true }}
				className={styles.imageContainer} 
				style={{backgroundImage: `url(/assets/images/${image}.jpg)`}}
			>
				{
					video && 
					<video className={classNames(styles.image, styles.video)} muted autoPlay loop>
					  <source src={`/assets/videos/${video}.mp4`} type="video/mp4" />
					</video>
				}
			</motion.div>
		</div>
	)
}

export default HeroHalf;