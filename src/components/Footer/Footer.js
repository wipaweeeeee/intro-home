import styles from './styles.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import classNames from 'classnames';

//TODO: replace the right links in

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.icons}>
				<Link href=""><Image src='/assets/images/fb-icon.svg' alt={'facebook'} width={10} height={20} /></Link>
				<Link href=""><Image src='/assets/images/ig-icon.svg' alt={'instagram'} width={20} height={20} /></Link>
				<Link href=""><Image src='/assets/images/yt-icon.svg' alt={'youtube'} width={28} height={20} /></Link>
			</div>
			<div className={styles.locationContainer}> 
				<div className={classNames(styles.location, "mr-60")}>
					<Image src='/assets/images/location-icon.svg' alt={'location'} width={18} height={24} className='mb-20' />
					<h5 className='label-2 caps'>bucharest</h5>
					<p className='label-2'>44 Lorem Ipsum St. Dolor AM 11011</p>
				</div>
				<div className={styles.location}>
					<Image src='/assets/images/location-icon.svg' alt={'location'} width={18} height={24} className='mb-20' />
					<h5 className='label-2 caps'>cluj</h5>
					<p className='label-2'>44 Lorem Ipsum St. Dolor AM 11011</p>
				</div>
			</div>
			<ul className={styles.links}>
				<li><Link href="/locations">Locations</Link></li>
				<li><Link href="/about">about</Link></li>
				<li><Link href="/intro-life">intro life</Link></li>
				<li><Link href="/connect">connect</Link></li>
				<li><Link href="/what-to-expect">what to expect</Link></li>
				<li><Link href="/giving">donate</Link></li>
			</ul>
		</div>
	)
}

export default Footer;