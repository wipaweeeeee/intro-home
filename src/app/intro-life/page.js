'use client'

import { useState } from 'react';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import HeroHalf from '../../components/HeroHalf'
import ContentHalf from '../../components/ContentHalf'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Banner from '../../components/Banner'
import Form from '../../components/Form'
import AnimateBlob from '../../components/AnimateBlob'
import styles from './styles.module.scss';

export default function IntroLife() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const [ forms, setForms ] = useState({
    visit: false,
    outreach: false
  })

  return (
    <main>
      <HeroHalf color="blue" image="welcomeHome">
        <h1 className="display-3 caps mb-10">{data.heroTitle}</h1>
        <p className="mb-20">{data.heroContent1}</p>
        <p className="mb-60">{data.heroContent2}</p>
        <Button variant="primary" onClick={() => setForms({ ...forms, visit: true })}>{data.heroCTA}</Button>
      </HeroHalf>
      <Form 
        id="plan visit" 
        show={forms.visit} 
        handleClose={() => setForms({ ...forms, visit: false })}
        title={data.formVisitTitle}
        formTitle="plan your visit"
        desc={data.formVisitContent}
        locations
        cities
      />
      <ContentHalf color="red" image="city">
        <Tag variant="paper" className="mb-40">{data.outreachTag}</Tag>
        <h1 className="display-3 mb-40">{data.outreachTitle}</h1>
        <p className="mb-60">{data.outreachContent}</p>
        <Button variant="secondary-light" onClick={() => setForms({ ...forms, outreach: true })}>{data.outreachCTA}</Button>
      </ContentHalf>
      <Form 
        id="i love my city" 
        show={forms.outreach} 
        handleClose={() => setForms({ ...forms, outreach: false })}
        title={data.formOutreachTitle}
        formTitle="i love my city"
        desc={data.formOutreachContent}
        message
        cities
      />
      <Banner color="yellow-dark" icon="star">{data.banner}</Banner>
      <div className={styles.kidsContainer}>
        <div className={styles.content}>
          <h4 className="display-3 mb-40">{data.youthTitle}</h4>
          <p>{data.youthContent}</p>
        </div>
        <div className={styles.content}>
          <h4 className="display-3 mb-40">{data.kidsTitle}</h4>
          <p>{data.kidsContent}</p>
        </div>
        <AnimateBlob className={styles.blobSmall} />
        <AnimateBlob className={styles.blobTiny} />
        <AnimateBlob className={styles.blobLarge} />
      </div>
    </main>
  )
}
