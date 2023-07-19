import { motion } from "framer-motion";

const AnimateBlob = ({ className }) => {
	return (
		<div className={className}>
			<motion.svg 
				animate={{ rotate: 16 }}
				transition={{
					repeat: Infinity,
				    repeatType: "reverse",
				    duration: 8,
				  }}
				width="876" height="502" viewBox="0 0 876 502" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M762.55 448.878C781.985 434.426 804.119 413.759 819.928 390.731C824.235 385.546 840.13 362.931 843.641 357.012C852.424 342.209 851.335 337.313 858.887 323.17C873.202 296.362 889.866 251.171 856.744 230.104C843.177 221.475 827.486 214.721 811.419 211.43C785.666 206.154 757.583 203.007 731.316 202.324C720.702 201.739 652.575 192.847 642.314 189.822C631.593 186.662 620.318 186.166 609.679 182.568C597.093 178.313 583.541 176.525 571.194 171.765C562.241 168.313 553.904 163.666 545.07 159.958C531.494 154.259 521.003 145.411 509.139 137.347C500.454 131.445 490.838 126.627 482.438 120.37C474.179 114.218 467.876 105.933 459.776 99.6118C451.676 93.2912 442.574 87.2052 433.899 81.5543C406.131 63.4659 378.59 47.2616 347.039 35.0214C302.891 17.8949 254.223 5.28151 206.53 1.22146C176.517 -1.33345 145.206 0.912788 115.055 0.912788C73.8425 0.912788 17.3555 25.9713 5.94385 66.0433C3.47961 74.6965 -1.31519 81.5919 0.340027 90.8917C2.2876 101.834 1.7912 111.715 8.58099 121.142C15.0809 130.167 20.4486 137.444 29.7604 143.984C39.7614 151.008 51.8819 155.497 61.5706 162.813C98.5822 190.763 147.188 200.243 184.114 228.098C207.491 245.732 232.774 265.827 248.888 289.833C263.607 311.76 274.238 335.712 288.528 357.819C309.895 390.877 344.809 411.411 379.426 431.207C406.186 446.51 430.727 462.586 460.6 472.415C487.747 481.347 514.814 489.484 542.927 495.334C621.037 511.588 699.731 495.591 762.55 448.878Z" fill="white" fillOpacity="0.1"/>
			</motion.svg>
		</div>
	)
}

export default AnimateBlob;