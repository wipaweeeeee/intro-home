import { motion } from 'framer-motion';

const AnimateDiv = ({ style, children, className }) => {
	return (
		<motion.div
			style={style}
			className={className}
			initial={{ opacity: 0, y: 50 }}
        	whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delayChildren: 0.5, ease: 'easeIn' }}}
        	viewport={{ once: true, margin: "120px 0px 0px 0px"}}
		>
			{children}
		</motion.div>
	)
}

export default AnimateDiv;