'use client';

import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../../config/Store';
import content from './content.js';

//TODO: fix mobile glitch

const Nav = () => {

	const { appContext, setAppContext }  = useAppContext();
	const [ open, setOpen ] = useState(false);

	const currentPage = usePathname();
	let data = content[appContext.lang];

	const handleLang = (_lang) => {
		setAppContext(state => ({
			...state, 
			lang: _lang
		}))
	}

	return (
		<div className={styles.navContainer}>
			<Link href="/">
				<Image
	              	src="/assets/images/logo.svg"
	              	alt="Intro Logo"
	              	width={150}
	              	height={27}
	              	priority
	              	className={styles.logo}
	            />
            </Link>
            {
            	!appContext.media.mob && 
            	<>
            		<ul className={styles.list}>
		            	<li className={classNames({[styles.active] : currentPage == "/locations"})}>
		            		<Link href="">{data.locations}</Link>
		            	</li>
		            	<li className={classNames({[styles.active] : currentPage == "/about"})}>
		            		<Link href="/about">{data.about}</Link>
		            	</li>
		            	<li className={classNames({[styles.active] : currentPage == "/intro-life"})}>
		            		<Link href="intro-life">{data.intro_life}</Link>
		            	</li>
		            	<li className={classNames({[styles.active] : currentPage == "/connect"})}>
		            		<Link href="">{data.connect}</Link>
		            	</li>
		            	<li className={classNames({[styles.active] : currentPage == "/what-to-expect"})}>
		            		<Link href="">{data.what_to_expect}</Link>
		            	</li>
		            	<li className={classNames({[styles.active] : currentPage == "/donate"})}>
		            		<Link href="">{data.donate}</Link>
		            	</li>
		            </ul>
		            <div className={styles.lang}>
		            	<span 
		            		onClick={() => handleLang('en')} 
		            		className={appContext.lang == 'en' ? styles.active : null}
		            	>EN</span>
		            	<span className={styles.dot}>•</span>
		            	<span 
		            		onClick={() => handleLang('ro')}
		            		className={appContext.lang == 'ro' ? styles.active : null}
		            	>RO</span>
		            </div>
            	</>
            }
            {
            	appContext.media.mob && 
            	<>
	            	<div onClick={() => setOpen(!open)}>
		            	<Image
			              	src="/assets/images/mob_menu.svg"
			              	alt="Intro Logo"
			              	width={20}
			              	height={14}
			              	priority
			            />
			        </div>
		            <div className={classNames(styles.mobMenuContainer, {[styles.open] : open})}>
		            	<ul className={styles.listMob}>
			            	<li className={classNames({[styles.active] : currentPage == "/locations"})}>
			            		<Link href="">{data.locations}</Link>
			            	</li>
			            	<li className={classNames({[styles.active] : currentPage == "/about"})}>
			            		<Link href="/about">{data.about}</Link>
			            	</li>
			            	<li className={classNames({[styles.active] : currentPage == "/intro-life"})}>
			            		<Link href="intro-life">{data.intro_life}</Link>
			            	</li>
			            	<li className={classNames({[styles.active] : currentPage == "/connect"})}>
			            		<Link href="">{data.connect}</Link>
			            	</li>
			            	<li className={classNames({[styles.active] : currentPage == "/what-to-expect"})}>
			            		<Link href="">{data.what_to_expect}</Link>
			            	</li>
			            	<li className={classNames({[styles.active] : currentPage == "/donate"})}>
			            		<Link href="">{data.donate}</Link>
			            	</li>
			            </ul>
			            <div className={styles.lang}>
			            	<span 
			            		onClick={() => handleLang('en')} 
			            		className={appContext.lang == 'en' ? styles.active : null}
			            	>EN</span>
			            	<span className={styles.dot}>•</span>
			            	<span 
			            		onClick={() => handleLang('ro')}
			            		className={appContext.lang == 'ro' ? styles.active : null}
			            	>RO</span>
			            </div>
		            </div>
		       	</>
            }
		</div>
	)
}

export default Nav;