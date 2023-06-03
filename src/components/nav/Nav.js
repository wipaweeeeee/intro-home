import styles from './styles.module.scss';
import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
	return (
		<div className={styles.navContainer}>
			<Link href="">
				<Image
	              	src="/assets/images/logo.svg"
	              	alt="Intro Logo"
	              	width={150}
	              	height={27}
	              	priority
	              	className={styles.logo}
	            />
            </Link>
            <ul className={styles.list}>
            	<li><Link href="">locations</Link></li>
            	<li><Link href="">about</Link></li>
            	<li><Link href="">intro life</Link></li>
            	<li><Link href="">connect</Link></li>
            	<li><Link href="">what to expect</Link></li>
            	<li><Link href="">donate</Link></li>
            </ul>
            <div className={styles.lang}>
            	<span className={styles.active}>EN</span>
            	<span className={styles.dot}>•</span>
            	<span>RO</span>
            </div>
		</div>
	)
}

export default Nav;