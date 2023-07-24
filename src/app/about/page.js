'use client'

import { useEffect } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import HeroHalf from '../../components/HeroHalf'
import { motion } from 'framer-motion'
import AnimateDiv from '../../components/AnimateDiv';
import AnimateLine from '../../components/AnimateLine';
import AnimateBlob from '../../components/AnimateBlob';
import QuoteHalf from '../../components/QuoteHalf';
import ContentHalf from '../../components/ContentHalf';
import classNames from 'classnames';

export default function About() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const values = data.values && data.values.map((item, index) => {
    return (
      <div key={index} className={styles.valueItem}>
        <span className="editorial-4">{item.count}</span>
        <h4 className="editorial-4 mb-20">{item.title}</h4>
        <p>{item.content}</p>
      </div>
    )
  })

  const believesLeft = data.believesLeft && data.believesLeft.map((item, index) => {
    return <p key={index}>{item}</p>
  })

  const believesRight = data.believesRight && data.believesRight.map((item, index) => {
    return <p key={index}>{item}</p>
  })

  const notes = data.notes && data.notes.map((item, index) => {
    return <p key={index}>{item}</p>
  })

  return ( 
    <div>
      <HeroHalf color="black" image="mission">
        <AnimateDiv
          className={styles.heroContent}
        >
          <h1 className="editorial-1">A church big enough to <span className={styles.celebrate}>celebrate</span> but small enough to care for <span className={styles.everyone}>everyone</span></h1>
        </AnimateDiv>
      </HeroHalf>
      <div className={styles.vision}>
        <AnimateDiv><h2 className="editorial-4">Vision & Culture</h2></AnimateDiv>
        <div className={styles.visionContent}> 
          <AnimateDiv>
            <div className={classNames(styles.columnContainer)}>
              <div className={styles.column}>{data.vision1}</div>
              <div className={styles.column}>{data.vision2}</div>
            </div>
            <div className={classNames(styles.columnContainer, styles.second)}>
              <div className={styles.column}>{data.vision3}</div>
              <div className={styles.column}>{data.vision4}</div>
            </div>
            <div className={classNames(styles.columnContainer, styles.third)}>
              <div className={styles.column}>{data.vision5}</div>
              <div className={styles.column}>{data.vision6}</div>
              <div className={styles.column}>{data.vision7}</div>
            </div>
          </AnimateDiv>
          <AnimateLine className={styles.lineTop}/>
          <AnimateLine className={styles.lineBottom}/>
        </div>
      </div>
      <div className={styles.mission}>
        <AnimateDiv>
          <h2 className="editorial-3 mb-40">{data.missionTitle}</h2>
          <p className="body-2">{data.missionContent}</p>
          <AnimateBlob className={styles.blob}/>
          <AnimateBlob className={styles.blobSmall}/>
        </AnimateDiv>
      </div>
      <div className={styles.values}> 
        <AnimateDiv>
          <h2 className="editorial-4 mb-40">Values</h2>  
          <div className={styles.valueRow}>{values}</div>
          <h2 className="editorial-4 mb-40">{data.believeTitle}</h2>  
          <div className={styles.splitContainer}>
            <div className={styles.splitColumn}> 
              {believesLeft}
            </div>
            <div className={styles.splitColumn}> 
              {believesRight}
            </div>
          </div>
        </AnimateDiv>
      </div>
      <QuoteHalf 
        contentLeft={data.quoteLeftContent}
        contentRight={data.quoteRightContent}
      />
      <ContentHalf color="yellow" image="bocanceaFamily">
        <h1 className="display-3 mb-40">{data.teamTitle}</h1>
        <p>{data.teamContent}</p>
      </ContentHalf>
      <div className={styles.notes}> 
        <AnimateDiv>
          <img src="/assets/images/star_sm.svg" />
          {notes}
          <img src="/assets/images/star_sm.svg" />
        </AnimateDiv>
      </div>
    </div>
) }