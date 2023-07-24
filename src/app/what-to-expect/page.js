'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import Arrow from '../../components/Arrow';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export default function About() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const [ selected, setSelected ] = useState(null);
  const [ open, setOpen ] = useState(false);
  const [ image, setImage ] = useState('/assets/images/faq_1.jpg');

  const variants = {
    selected: {
      rotate: -90,
      transition: { duration: 0.15, ease: 'easeIn' }
    },
    unselected: {
      rotate: 90,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  }

  const revealVariants = {
    reveal: {
      height: 'auto',
      marginBottom: '20px',
      transition: { duration: 0.15, ease: 'easeIn' }
    },
    hide: {
      height: 0,
      marginBottom: '0px',
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  }

  const handleClick = (question) => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }

    setSelected(question)
  }

  useEffect(() => {
    if (selected !== null) {
      let imageData = data.list && data.list.filter(item => item.question == selected)[0].image;
      setImage(imageData);
    }
  },[selected])


  let length = data.list && data.list.length;

  const questions = data.list && data.list.map((item, index) => {
    return (
      <div key={index} className={styles.questionRow}>
        <div className={styles.question} onClick={() => handleClick(item.question)}>
          <span className="body-2">{item.question}</span>
          <motion.div 
            variants={variants} 
            initial={variants.unselected} 
            animate={selected == item.question && open ? 'selected' : 'unselected'}
            className={styles.arrow}
          ><Arrow /></motion.div>
        </div>
        <motion.div 
          variants={revealVariants} 
          initial={revealVariants.hide} 
          animate={selected == item.question && open ? 'reveal' : 'hide'} 
          className={classNames(styles.answer, {[styles.last] : (index + 1 == length)}, {[styles.open] : selected == item.question && open})}
        >{item.answer}</motion.div>
      </div>
    )
  })

  return (
    <div className={styles.faqContainer}>
      <div className={styles.left}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{data.pageTitle}</h1>
          <img src="/assets/images/questionMark.svg" />
        </div>
        <div className={styles.questionsContainer}>
          {questions}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          { image && <img src={image} className={styles.image} /> }
        </div>
      </div>
    </div>
  )
}
