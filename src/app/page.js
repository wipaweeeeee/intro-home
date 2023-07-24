'use client'

import { useState, useEffect } from 'react'
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
import Arrow from '../components/Arrow';

export default function Home() {

  const { appContext }  = useAppContext();
  const [ trackWidth, setTrackWidth ] = useState();
  const [ selectedCourse, setSelectedCourse ] = useState();
  const [ openForm, setOpenForm ] = useState(false);
  const [ forms, setForms ] = useState({
    visit: false,
    group: false,
    prayer: false,
    popup: false
  })

  let data = content[appContext.lang];

  const trackAnim = {
    animate: {
      x: ['-10%', '-90%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
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

  const handleFormMobile = (title) => {
    if (openForm) {
      setOpenForm(false);
      setSelectedCourse(null);
    } else {
      setSelectedCourse(title);
      setOpenForm(true);
    }
  }

  const selectedCourseData = data.growForm.filter(item => item.title == selectedCourse)[0];

  const growList = data.growForm.map((item, index) => {
    return (
      <li key={index} className={classNames(styles.listItem, {[styles.selected] : item.title == selectedCourse})} onClick={() => handleCourseSelect(item.title)}>
        <span>{item.formTitle}</span>
        <Arrow onClick={() => handleCourseSelect(item.title)}/>
      </li>
    )
  })


  const growListMobile = data.growForm.map((item, index) => {
    return (
      <>
        <li key={index} className={classNames(styles.listItem, {[styles.selected] : item.title == selectedCourse})} onClick={() => handleFormMobile(item.title)}>
          <span>{item.title}</span>
          <Arrow onClick={() => handleCourseSelect(item.title)} variant='vertical' />
        </li>
        <AnimatePresence>
          {
            (openForm && item.title == selectedCourse) && (
              <motion.div 
                className={styles.formMobile}
                initial={{ y: '-100%', height: '0', paddingTop: 0, opacity: 0}}
                animate={{ y: '0', height: '100%', paddingTop: 20, opacity: 1,  transition: { duration: 0.25, ease: 'easeIn' }}}
                exit={{ y: '-100%', height: '0', paddingTop: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeOut' }}}
              >
                <FormHalf 
                  title={item.formTitle} 
                  desc={item.content} 
                  formTitle={item.formTitle}
                />
              </motion.div>
            )
          }
        </AnimatePresence>
      </>
    )
  })

  return (
    <div className={styles.main}>
      <HeroHalf color="orange" video="homevid" className={styles.hero}>
        <motion.div 
          className={styles.track}
          variants={trackAnim}
          animate="animate"
        >
          <h1 className="display-1 caps" style={{display: 'inline-block'}}>Welcome to Welcome to Welcome to Welcome to Welcome to Welcome to Welcome to</h1>
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
      <div className={styles.popup} onClick={() => setForms({ ...forms, popup: true })}>
        <Image
            src={`/assets/images/homepagePopup.png`}
            alt={'popup'}
            width={120}
            height={120}
            priority
            className={styles.image}
        />
      </div>
      <Form 
        id="popup" 
        show={forms.popup} 
        handleClose={() => setForms({ ...forms, popup: false })}
        title={data.popupFormTitle}
        formTitle="popup"
        desc={data.popupFormContent}
        phone
        message
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
            {!appContext.media.mob && growList}
            {appContext.media.mob && growListMobile}
            <li>
              <Link href="" target="_blank">{data.growResource}</Link>
              <Arrow variant={appContext.media.mob ? 'vertical' : null}/>
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
