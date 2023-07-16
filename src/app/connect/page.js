'use client'

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import { motion } from 'framer-motion'
import AnimateDiv from '../../components/AnimateDiv';
import ContentHalf from '../../components/ContentHalf';
import Button from '../../components/Button';
import BannerArrow from '../../components/BannerArrow';
import classNames from 'classnames';
import Image from 'next/image'

export default function Connect() { 
	const { appContext }  = useAppContext();
  	let data = content[appContext.lang];

  	const [ play, setPlay ] = useState(false);
  	const video = useRef();

  	useEffect(() => {
  		if (play) {
  			video.current.play();
  		} else {
  			video.current.pause();
  		}
  	},[play])

  	const variants = {
  		show: {
  			opacity: 1
  		}, 
  		hide: {
  			opacity: 0
  		}
  	}

  	const nextStep = data.steps.map((item, index) => {
  		return (
  			<AnimateDiv key={index} className={classNames(styles.stepsContainer, {[styles.flip] : index % 2 > 0})}>
  				<div className={styles.image}>
	  				<Image
		                src={item.image}
		                alt={item.title}
		                width={646}
		                height={325}
		            />
	  			</div>
  				<div className={styles.content}>
	  				<h3 className="editorial-2 mb-40">{item.title}</h3>
	  				<p className="mb-40">{item.content}</p>
	  				<Button variant="secondary-dark">{item.CTA}</Button>
	  				{
	  					item.quote && 
	  					<div className={styles.quoteContainer}>
	  						<div className="mb-40">{item.quote}</div>
	  						<div className={styles.quoteVerse}>{item.quoteVerse}</div>
	  					</div> 
	  				}
	  			</div>
  			</AnimateDiv>
  		)
  	})

  	return (
  		<div>
  			<div className={styles.hero}>
  				<AnimateDiv className={styles.heroContent}>
	  				<h1 className="editorial-3">{data.heroTitle1}</h1> 
	  				<h1 className="display-3 mb-40">{data.heroTitle2}</h1> 
	  				<p className="body-2 mb-60">{data.heroContent}</p>
	  				<Button variant="secondary-dark">{data.heroCTA}</Button>
	  			</AnimateDiv>
  			</div>
  			<BannerArrow content={data.nextSteps} />
  			<div className={styles.nextSteps}>
  				{nextStep}
  			</div>
  			<ContentHalf color="red" image="alpha">
		        <h1 className="display-3 mb-40">{data.alphaTitle}</h1>
		        <p className="mb-60">{data.alphaContent}</p>
		        <Button variant="secondary-light">{data.alphaCTA}</Button>
		    </ContentHalf>
		    <div className={styles.alpha}>
		    	<AnimateDiv className={styles.content}>
		    		<h3 className="display-3 mb-40">{data.alphaDetailTitle}</h3>
		    		<p className="mb-60">{data.alphaDetailContent}</p>
		    		<h4 className="editorial-4">{data.alphaDetailQuote}</h4>
		    	</AnimateDiv>
		    	<AnimateDiv className={styles.video}>
		    		<motion.div 
		    			variants={variants}
		    			animate={ play ? 'hide' : 'show'}
		    			className={styles.scrim}
		    			onClick={() => setPlay(!play)}
		    		>
		    			<Image src={'/assets/images/playVideo.svg'} alt={'play'} width={75} height={75} />
		    		</motion.div>
		    		<video poster="/assets/images/alpha_video_poster.jpg" width="960" height="540" ref={video}>
					  <source src={`/assets/videos/alpha_trailer.mp4`} type="video/mp4" />
					</video>
		    	</AnimateDiv>
		    </div>
  		</div>
  	)
}