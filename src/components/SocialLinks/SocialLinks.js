import styles from './styles.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

//TODO: add correct links

const SocialLinks = ({ variant = 'light' }) => {

	const Arrow = () => {
		return (
			<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill={ variant == 'light' ? '#FFF7E1' : '#000000' } fillRule="evenodd" clipRule="evenodd" d="M8.29531 0.70101L21.7953 0.701011C22.6237 0.701011 23.2953 1.37258 23.2953 2.20101L23.2953 15.701C23.2953 16.5294 22.6237 17.201 21.7953 17.201C20.9669 17.201 20.2953 16.5294 20.2953 15.701V5.82233L3.05698 23.0607C2.47119 23.6464 1.52145 23.6464 0.935661 23.0607C0.349874 22.4749 0.349874 21.5251 0.935661 20.9393L18.174 3.70101L8.29531 3.70101C7.46688 3.70101 6.79531 3.02944 6.79531 2.20101C6.79531 1.37258 7.46688 0.70101 8.29531 0.70101Z"/>
			</svg>
		)
	}

	return (
		<ul className={classNames(styles.socialLinksContainer, styles[variant])}>
			<li>
				<Link href="" target="_blank">fb</Link>
				<Arrow />
			</li>
			<li>
				<Link href="" target="_blank">ig</Link>
				<Arrow />
			</li>
			<li>
				<Link href="" target="_blank">youtube</Link>
				<Arrow />
			</li>
		</ul>
	)
}

export default SocialLinks;