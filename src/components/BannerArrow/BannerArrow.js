import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const BannerArrow = ({ content, variant }) => {

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
		<div className={classNames(styles.bannerArrowContainer, styles[variant])}>
			{arrows}
			<h4 className="editorial-2">{content}</h4>
			{arrows}
		</div>
	)
}

export default BannerArrow;