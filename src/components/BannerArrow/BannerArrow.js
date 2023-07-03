import styles from './styles.module.scss';
import { motion } from 'framer-motion'

const BannerArrow = ({ content }) => {

	const count = 3;
	const arrows = []; 

	for (var i = 0; i < count; i++) {
		arrows.push(
			<motion.div 
				key={i}
				animate={{ 
					y: 10, 
					transition: { 
						duration: 1, 
						delay: 0.15 * (i + 1), 
						repeat: Infinity, 
						repeatType: "mirror", 
						ease: "easeInOut"} 
				}} className={styles.arrow}/>
		)
	}

	return (
		<div className={styles.bannerArrowContainer}>
			{arrows}
			<h4 className="editorial-2">{content}</h4>
			{arrows}
		</div>
	)
}

export default BannerArrow;