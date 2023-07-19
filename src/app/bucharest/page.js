'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import Button from '../../components/Button';
import Image from 'next/image';
import classNames from 'classnames';
import AnimateDiv from '../../components/AnimateDiv';
import HeroHalf from '../../components/HeroHalf';
import ContentHalf from '../../components/ContentHalf';
import QuoteHalf from '../../components/QuoteHalf';
import Banner from '../../components/Banner';
import BannerArrow from '../../components/BannerArrow';
import Tag from '../../components/Tag';
import Link from 'next/link';
import Form from '../../components/Form';

//TODO: add in correct links

export default function Bucharest() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const [ showForm, setShowForm ] = useState(false);

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
      <HeroHalf color="yellow-light" image="bucharest-color">
        <h1 className="display-3 caps mb-10">{data.heroTitle}</h1>
        <p className="mb-60">{data.heroSubtitle}</p>
        <p className="body-2">{data.heroDetails}</p>
      </HeroHalf>
      <ContentHalf color="white" image="bocanceaFamily">
        <h1 className="display-3">The Bocancea Family</h1>
        <h5 className="body-2 mb-40">Daniel, Alina, Esme</h5>
        <p>{data.familyContent}</p>
      </ContentHalf>
      <BannerArrow content={data.helpTitle} />
      <div className={styles.splitContent}>
        <AnimateDiv className={styles.text}>
          <h2 className="editorial-3 mb-40">{data.helpOneTitle}</h2>
          <p className="mb-40">{data.helpOneContent}</p>
          <Link href="/giving"><Button variant="secondary-dark">{data.helpOneCTA}</Button></Link>
        </AnimateDiv>
        <AnimateDiv className={styles.image}>
          <Image src={`/assets/images/ellipsis.png`} alt={'ellipsis'} width={416} height={203} />
        </AnimateDiv>
        <AnimateDiv className={styles.image}>
          <Image src={`/assets/images/asterisk.png`} alt={'asterisk'} width={186} height={180} />
        </AnimateDiv>
        <AnimateDiv className={styles.text}>
          <h2 className="editorial-3 mb-40">{data.helpTwoTitle}</h2>
          <p className="mb-40">{data.helpTwoContent}</p>
          <Button variant="secondary-dark" onClick={() => setShowForm(true)}>{data.helpTwoCTA}</Button>
          <Form 
            id="bucharest lauch team" 
            show={showForm} 
            handleClose={() => setShowForm(false)}
            title={data.formTitle}
            formTitle="bucharest lauch team"
            desc={data.formContent}
            message
            phone
          />
        </AnimateDiv>
        <AnimateDiv className={styles.text}>
          <h2 className="editorial-3 mb-40">{data.helpThreeTitle}</h2>
          <p className="mb-40">{data.helpThreeContent}</p>
        </AnimateDiv>
        <AnimateDiv className={styles.image}>
          <Image src={`/assets/images/rings.png`} alt={'rings'} width={235} height={154} />
        </AnimateDiv>
      </div>
      <QuoteHalf 
        titleLeft={data.quoteLeftTitle}
        contentLeft={data.quoteLeftContent}
        titleRight={data.quoteRightTitle}
        contentRight={data.quoteRightContent}
      />
      <AnimateDiv>
        <div className={styles.valueContainer}>
          <Tag>values</Tag>
          <div className={styles.valueRow}>{values}</div>
        </div>
      </AnimateDiv>
      <Banner color="orange" icon="globe">a national family with local impact</Banner>
    </>
) }