import { motion } from "framer-motion";

const AnimateLine = ({ className }) => {
	return (
		<div className={className}>
			<motion.svg width="1437" height="462" viewBox="0 0 1437 462" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
				<motion.path 
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
			            duration: 3,
			            ease: "easeInOut"
			        }}
			        strokeDasharray="0 1"
					d="M1.87085e-05 231C1.87085e-05 231 251.665 -250.5 867.412 231C1113.05 423.083 1300.46 461.912 1437 439.193" stroke="#E9E1CD" strokeOpacity="0.5" strokeWidth="10" strokeLinecap="round"/>
			</motion.svg>
		</div>
	)
}

export default AnimateLine;