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

const growData = [
  {
    title: 'alpha course',
    formTitle: 'come to alpha',
    content: 'The Alpha course aims to present to everyone the Christian perspective on the world and life. You may learn new things, or understand Christianity differently. Either way, you will find friendship and acceptance no matter what you believe'
  },
  {
    title: 'marriage course',
    formTitle: 'Join the Marriage Course',
    content: 'Make your family, or your future family, a piece of heaven. It is possible! Together with your partner you will receive encouragement, but also challenges, to get out of the comfort zone and live a happy life.'
  },
  {
    title: 'join a team',
    formTitle: 'Be part of a team',
    content: 'We believe we have the best teams. We love our volunteers the most, because nothing could be done without them. Be one of them! Give yourself a chance to find out what you are doing very, very well.'
  }
]

export default function Home() {

  const [ trackWidth, setTrackWidth ] = useState();
  const [ selectedCourse, setSelectedCourse ] = useState();
  const [ openForm, setOpenForm ] = useState(false);

  useEffect(() => {
    let width = window.innerWidth / 2;
    setTrackWidth(width);
  },[])

  const trackAnim = {
    // animate: {
    //   x: [0, -trackWidth],
    //   transition: {
    //     x: {
    //       repeat: Infinity,
    //       repeatType: "loop",
    //       duration: 5,
    //       ease: "linear",
    //     },
    //   },
    // },
  };

  const handleCourseSelect = (title) => {
    setSelectedCourse(title);
    setOpenForm(true);
  }

  const handleClose = () => {
    setSelectedCourse(null);
    setOpenForm(false)
  }

  const selectedCourseData = growData.filter(item => item.title == selectedCourse)[0];

  const growList = growData.map((item, index) => {
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
          <h1 className="display-1 caps">Welcome to Welcome to</h1>
        </motion.div>
        <h1 className={classNames("display-1 caps", styles.heroTitle)}>church</h1>
        <div className={styles.heroContent}>
          <p className="body-2 mb-40">Experience God, find your purpose and <br /> make a difference into society!</p>
          <Button variant="primary">plan your visit</Button>
        </div> 
      </HeroHalf>
      <div className={styles.connect}>
        <div className={styles.title}><span>connect</span> <span>with us</span></div>
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
            <Button variant="secondary">new to intro</Button>
            <p>Be part of a community, meet new people and build relationships through relevant discussions and attractive activities</p>
          </div>
          <SocialLinks />
        </div>
      </div>
      <div className={styles.groups}>
        <div className={styles.title}>
          <h2 className="display-2 caps">intro<br/>groups</h2>
          <p>Intro Groups are the roots of our church. We wish you to connect with other people, find your place in the community, make new friends and grow your relationship with Jesus. Intro Groups are small groups with maximum 10-12 members who meet constantly in different locations or online. With the help of Intro Groups we're building a familiar setting, we enjoy life together with one another and learn more about Jesus.</p>
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
        <div className={styles.cta}><Button variant="primary">join a group</Button></div>
      </div>
      <div className={styles.grow}>
        <div className={styles.left}>
          <h3 className={classNames("editorial-1", styles.title)}>Let’s grow<br/>spiritually &<br/>develop other<br/>areas of your life</h3>
          <ul className={styles.list}>
            {growList}
            <li>
              <Link href="" target="_blank">resources</Link>
              <Image src={`/assets/images/arrowCircle.svg`} alt={'arrow'} width={32} height={32} />
            </li>
          </ul>
        </div>
        <div className={styles.right}>
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
        </div>
      </div>
    </div>
  )
}
