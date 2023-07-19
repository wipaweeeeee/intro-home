'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import HeroHalf from '../components/HeroHalf'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks';
import classNames from 'classnames';
import Link from 'next/link';
import FormHalf from '../components/FormHalf';
import AnimateDiv from '../components/AnimateDiv';
import { useAppContext } from '../config/Store';
import content from './content.js';
import Form from '../components/Form';

export default function Home() {

  const { appContext }  = useAppContext();
  const [ trackWidth, setTrackWidth ] = useState();
  const [ selectedCourse, setSelectedCourse ] = useState();
  const [ openForm, setOpenForm ] = useState(false);
  const [ forms, setForms ] = useState({
    visit: false,
    group: false,
    prayer: false
  })
  

  let data = content[appContext.lang];

  const track = useRef();

  useEffect(() => {
    let width = window.innerWidth / 2;
    setTrackWidth(track.current.clientWidth - width + 100);
  },[])

  const trackAnim = {
    animate: {
      x: [0, -trackWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  const handleCourseSelect = (title) => {
    setSelectedCourse(title);
    setOpenForm(true);
  }

  const handleClose = () => {
    setSelectedCourse(null);
    setOpenForm(false)
  }

  const selectedCourseData = data.growForm.filter(item => item.title == selectedCourse)[0];

  const growList = data.growForm.map((item, index) => {
    return (
      <li key={index} className={classNames(styles.listItem, {[styles.selected] : item.title == selectedCourse})} onClick={() => handleCourseSelect(item.title)}>
        <span>{item.title}</span>
        <Image src={`/assets/images/arrowCircle${selectedCourse == item.title ? '_filled' : ''}.svg`} alt={'arrow'} width={32} height={32} />
      </li>
    )
  })

  return (
    <div className={styles.main}>
      <HeroHalf color="orange" video="homeVid" className={styles.hero}>
        <motion.div 
          className={styles.track}
          variants={trackAnim}
          animate="animate"
        >
          <h1 className="display-1 caps" ref={track}>Welcome to Welcome to</h1>
        </motion.div>
        <h1 className={classNames("display-1 caps", styles.heroTitle)}>church</h1>
        <div className={styles.heroContent}>
          <p className="body-2 mb-40">{data.heroContent}</p>
          <Button variant="primary" onClick={() => setForms({ ...forms, visit: true })}>{data.planVisit}</Button>
        </div> 
      </HeroHalf>
      <Form 
        id="visit" 
        show={forms.visit} 
        handleClose={() => setForms({ ...forms, visit: false })}
        title={data.visitFormTitle}
        formTitle="visit"
        desc={data.visitonFormContent}
        cities
        locations
      />
      <div className={styles.connect}>
        <AnimateDiv>
          <div className={styles.title}>{data.connect} {data.withUs}</div>
          <div className={styles.imageContainer}>
            <Image
                src={`/assets/images/connect.jpg`}
                alt={'connect'}
                width={1440}
                height={580}
                priority
                className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <Link href="/new"><Button variant="primary">{data.newToIntro}</Button></Link>
              <p>{data.connectContent}</p>
            </div>
            <SocialLinks />
          </div>
        </AnimateDiv>
      </div>
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
          <div className={styles.cta}>
            <Button variant="primary"  onClick={() => setForms({ ...forms, group: true })}>{data.groupsCTA}</Button>
          </div>
        </AnimateDiv>
      </div>
      <Form 
        id="group" 
        show={forms.group} 
        handleClose={() => setForms({ ...forms, group: false })}
        title={data.groupsFormTitle}
        formTitle="group"
        desc={data.groupsFormContent}
        cities
        locations
      />
      <div className={styles.grow}>
        <div className={styles.left}>
          <AnimateDiv>
          <h3 className={classNames("editorial-1", styles.title)}>{data.growTitle}</h3>
          <ul className={styles.list}>
            {growList}
            <li>
              <Link href="" target="_blank">{data.growResource}</Link>
              <Image src={`/assets/images/arrowCircle.svg`} alt={'arrow'} width={32} height={32} />
            </li>
          </ul>
          </AnimateDiv>
        </div>
        <div className={styles.right}>
          <AnimateDiv>
            <Image
              src={`/assets/images/grow.jpg`}
              alt={'grow'}
              width={500}
              height={270}
              className={styles.growImage}
            />
            <AnimatePresence>
              {
                openForm && (
                  <motion.div 
                    className={styles.form}
                    initial={{ x: '100%' }}
                    animate={{ x: '0', transition: { duration: 0.25, ease: 'easeIn' }}}
                    exit={{ x: '100%', transition: { duration: 0.25, ease: 'easeOut' }}}
                  >
                    <Image className={styles.close} onClick={handleClose} src={`/assets/images/closeIcon.svg`} alt={'close'} width={16} height={16} />
                    <FormHalf 
                      title={selectedCourseData && selectedCourseData.formTitle} 
                      desc={selectedCourseData && selectedCourseData.content} 
                      formTitle={selectedCourse}
                    />
                  </motion.div>
                )
              }
            </AnimatePresence>
          </AnimateDiv>
        </div>
      </div>
      <div className={styles.pray}>
        <AnimateDiv style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image src='/assets/images/pray.png' alt={'pray'} width={1088} height={380} className={styles.image}/>
          <div className={styles.content}>
            <Button variant='secondary-dark' onClick={() => setForms({ ...forms, prayer: true })}>{data.prayCTA}</Button>
            <p>{data.prayContent}</p>
          </div>
        </AnimateDiv>
      </div>
      <Form 
        id="prayer-requiest" 
        show={forms.prayer} 
        handleClose={() => setForms({ ...forms, prayer: false })}
        title={data.prayFormTitle}
        formTitle="prayer request"
        desc={data.prayFormContent}
        message
        prayers
      />
      <div className={styles.giving}>
        <AnimateDiv>
          <div className={styles.title}>
            <h2 className="display-2 caps mr-8">{data.givingTitle}</h2>
            <Image
                  src={`/assets/images/heart.svg`}
                  alt={'heart'}
                  width={70}
                  height={70}
              />
          </div>
          <p className="mb-60">{data.givingContent}</p>
          <Link href="/giving"><Button variant="secondary-dark">{data.givingCTA}</Button></Link>
        </AnimateDiv>
      </div>
    </div>
  )
}
