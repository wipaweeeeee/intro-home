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
import Image from 'next/image';
import Form from '../../components/Form';

export default function Connect() { 
	const { appContext }  = useAppContext();
  	let data = content[appContext.lang];

  	const [ play, setPlay ] = useState(false);
  	const video = useRef();

  	const [ forms, setForms ] = useState({
	    connect: false,
	    introHome: false,
	    group: false,
	    team: false,
	    prayer: false,
	    alpha: false
	})

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

  	const nextStep = data.steps && data.steps.map((item, index) => {

  		const handleForm = (title) => {
  			if (title == 'introHome') {
  				setForms({ ...forms, introHome: true })
  			} else if (title == 'group') {
  				setForms({ ...forms, group: true })
  			} else if (title == 'team') {
  				setForms({ ...forms, team: true })
  			} else if (title == 'pray') {
  				setForms({ ...forms, pray: true })
  			}
  		}

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
	  				<Button variant="secondary-dark" onClick={() => handleForm(item.formTitle)}>{item.CTA}</Button>
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
	  				<Button variant="secondary-dark" onClick={() => setForms({ ...forms, connect: true })}>{data.heroCTA}</Button>
	  			</AnimateDiv>
  			</div>
  			<Form 
	            id="connect" 
	            show={forms.connect} 
	            handleClose={() => setForms({ ...forms, connect: false })}
	            title={data.formConnectTitle}
	            formTitle="connect card"
	            desc={data.formConnectContent}
	            message
	        />
  			<BannerArrow content={data.nextSteps} />
  			<div className={styles.nextSteps}>
  				{nextStep}
  			</div>
  			<Form 
	            id="join intro home" 
	            show={forms.introHome} 
	            handleClose={() => setForms({ ...forms, introHome: false })}
	            title={data.formIntroHomeTitle}
	            formTitle="join intro home"
	            desc={data.formIntroHomeContent}
	            cities
	            locations
	        />
	        <Form 
	            id="join a group" 
	            show={forms.group} 
	            handleClose={() => setForms({ ...forms, group: false })}
	            title={data.formGroupTitle}
	            formTitle="join a group"
	            desc={data.formGroupContent}
	            cities
	            locations
	        />
	        <Form 
	            id="join a team" 
	            show={forms.team} 
	            handleClose={() => setForms({ ...forms, team: false })}
	            title={data.formTeamTitle}
	            formTitle="join a group"
	            desc={data.formTeamContent}
	            cities
	            locations
	        />
	       	<Form 
	            id="prayer request" 
	            show={forms.pray} 
	            handleClose={() => setForms({ ...forms, pray: false })}
	            title={data.formPrayTitle}
	            formTitle="prayer request"
	            desc={data.formPrayContent}
	            prayers
	            message
	        />
  			<ContentHalf color="red" image="alpha">
		        <h1 className="display-3 mb-40">{data.alphaTitle}</h1>
		        <p className="mb-60">{data.alphaContent}</p>
		        <Button variant="secondary-light" onClick={() => setForms({ ...forms, alpha: true })}>{data.alphaCTA}</Button>
		    </ContentHalf>
		    <Form 
	            id="alpha" 
	            show={forms.alpha} 
	            handleClose={() => setForms({ ...forms, alpha: false })}
	            title={data.formAlphaTitle}
	            formTitle="alpha"
	            desc={data.formAlphaContent}
	            cities
	            locations
	        />
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