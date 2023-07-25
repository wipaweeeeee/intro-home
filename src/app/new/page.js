'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import AnimateDiv from '../../components/AnimateDiv';
import AnimateBlob from '../../components/AnimateBlob';
import Button from '../../components/Button';
import SocialLinks from '../../components/SocialLinks';
import Banner from '../../components/Banner';
import classNames from 'classnames';
import Image from 'next/image'
import Form from '../../components/Form';
import Link from 'next/link';

export default function New() { 
	const { appContext }  = useAppContext();
  	let data = content[appContext.lang];

  	const [ forms, setForms ] = useState({
	    connect: false,
	    group: false,
	    team: false,
	    impact: false,
	    startGroup: false
	})

  	const values = data.values.map((item, index) => {
	    return (
	      <div key={index} className={styles.valueItem}>
	        <span className="editorial-4">{item.count}</span>
	        <h4 className="editorial-4 mb-20">{item.title}</h4>
	        <p>{item.content}</p>
	      </div>
	    )
	})

  	return (
  		<>
	  		<div className={styles.newHero}>
	  			<AnimateDiv className={styles.content}>
	  				<h1 className="editorial-2 mb-60">{data.heroTitle}</h1>
	  				<Button variant="primary" onClick={() => setForms({ ...forms, connect: true })}>{data.heroCTA}</Button>
	  			</AnimateDiv>
	  			<AnimateDiv className={styles.image}>
	  				<Image src={'/assets/images/welcomeHome2.jpg'} alt={'welcome home'} width={651} height={434} />
	  			</AnimateDiv>
	  			<AnimateDiv className={styles.social}>
	  				<SocialLinks variant="dark"/>
	  			</AnimateDiv>
	  		</div>
	  		<Form 
		        id="connect card" 
		        show={forms.connect} 
		        handleClose={() => setForms({ ...forms, connect: false })}
		        title={data.connectFormTitle}
		        formTitle="plan your visit"
		        desc={data.connectFormContent}
		        message
	      	/>
	  		<div className={styles.groups}>
		        <AnimateDiv>
		          <div className={styles.title}>
		            <h2 className="display-2 caps">{data.groupsTitle}</h2>
		            <p>{data.groupsContent}</p>
		          </div>
		          <div className={styles.options}>
		            <Image
		              src={`/assets/images/groups_city.png`}
		              alt={'groups_city'}
		              width={440}
		              height={668}
		            />
		            <Image
		              src={`/assets/images/groups_online.png`}
		              alt={'groups_online'}
		              width={440}
		              height={668}
		            />
		            <Image
		              src={`/assets/images/groups_inter.png`}
		              alt={'groups_inter'}
		              width={440}
		              height={668}
		            />
		          </div>
		          <div className={styles.cta}><Button variant="primary" onClick={() => setForms({ ...forms, group: true })}>{data.groupsCTA}</Button></div>
		        </AnimateDiv>
      		</div>
      		<Form 
		        id="join a group" 
		        show={forms.group} 
		        handleClose={() => setForms({ ...forms, group: false })}
		        title={data.groupFormTitle}
		        formTitle="join a group"
		        desc={data.groupFormContent}
		        cities
		        locations
	      	/>
      		<div className={styles.banner}>
		        <AnimateDiv>
		          <h2 className="editorial-3">{data.banner}</h2>
		          <AnimateBlob className={styles.blob}/>
		          <AnimateBlob className={styles.blobSmall}/>
		        </AnimateDiv>
		    </div>
		    <div className={styles.values}> 
		        <AnimateDiv>
		          <h2 className="editorial-4 mb-40">Values</h2>  
		          <div className={styles.valueRow}>{values}</div>
		        </AnimateDiv>
		    </div>
		    <div className={styles.involve}> 
		        <AnimateDiv className={styles.involveContent}>
		        	<div className={styles.content}>
		        		<h2 className="display-3 mb-60">{data.involveTitle}</h2>  
		        		<Button variant="primary" onClick={() => setForms({ ...forms, team: true })}>{data.involveCTA1}</Button>
		        		<Button variant="primary" onClick={() => setForms({ ...forms, impact: true })}>{data.involveCTA2}</Button>
		        		<Button variant="primary" onClick={() => setForms({ ...forms, startGroup: true })}>{data.involveCTA3}</Button>
		        	</div>
		         	<div className={styles.image}>
		         		<Image
			              src={`/assets/images/involve_lifestyle.png`}
			              alt={'two people talking'}
			              width={694}
			              height={437}
			            />
		         	</div>
		        </AnimateDiv>
		    </div>
		    <Form 
		        id="join a team" 
		        show={forms.team} 
		        handleClose={() => setForms({ ...forms, team: false })}
		        title={data.teamFormTitle}
		        formTitle="join a team"
		        desc={data.teamFormContent}
		        cities
		        locations
	      	/>
	      	<Form 
		        id="social impact" 
		        show={forms.impact} 
		        handleClose={() => setForms({ ...forms, impact: false })}
		        title={data.impactFormTitle}
		        formTitle="social impact"
		        desc={data.impactFormContent}
		        cities
		        locations
	      	/>
	      	<Form 
		        id="start a group" 
		        show={forms.startGroup} 
		        handleClose={() => setForms({ ...forms, startGroup: false })}
		        title={data.startGroupFormTitle}
		        formTitle="start a group"
		        desc={data.startGroupFormContent}
		        message
	      	/>
		    <div className={styles.question}>
		    	<AnimateDiv>
		    		<h4 className="display-4 mb-40">{data.questionTitle}</h4>
		    		<Link href="/what-to-expect"><Button variant="secondary-dark">{data.questionCTA}</Button></Link>
		    	</AnimateDiv>
		    </div>
		    <Banner color="yellow-light" icon="smile">{data.bannerBottom}</Banner>
  		</>
  	)
}