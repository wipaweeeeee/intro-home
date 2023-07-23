import { useState } from 'react';
import styles from './styles.module.scss';

const Arrow = () => {

	const [ hover, setHover ] = useState(false);

	return (
		<svg 
			className={styles.arrow}
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
			width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
		>
				{ hover && <circle cx="16" cy="16" r="15" fill="black" stroke="black" strokeWidth="2"/> }
				<path d="M8.42188 15.9995H23.5798" stroke={ hover ? "#FFF7E1" : "black" } strokeWidth="2" strokeLinecap="round"/>
				<path d="M23.5761 15.9903C23.5761 15.9903 19.3984 13.8945 18.5234 10.105" stroke={ hover ? "#FFF7E1" : "black" } strokeWidth="2" strokeLinecap="round"/>
				<path d="M23.5761 15.9994C23.5761 15.9994 19.3984 18.0953 18.5234 21.8848" stroke={ hover ? "#FFF7E1" : "black" } strokeWidth="2" strokeLinecap="round"/>
				{ !hover && <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2"/> }
		</svg>
	)
}

export default Arrow;