'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion } from 'framer-motion'
import HeroHalf from '../components/HeroHalf'
import ContentHalf from '../components/ContentHalf'
import Button from '../components/Button'
import Tag from '../components/Tag'
import Banner from '../components/Banner'

export default function Home() {

  const [ trackWidth, setTrackWidth ] = useState();

  useEffect(() => {
    let width = window.innerWidth / 2;
    setTrackWidth(width);
  },[])

  console.log(trackWidth)

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

  return (
    <div className={styles.main}>
      <HeroHalf color="orange" video="homeVid">
        <motion.div 
          className={styles.track}
          variants={trackAnim}
          animate="animate"
        >
          <h1 className="display-1 caps">Welcome to Welcome to</h1>
        </motion.div>
        <h1 className="display-1 caps">church</h1>
        <p>Experience God, find your purpose and make a difference into society!</p>
        <Button variant="primary">plan your visit</Button>
      </HeroHalf>
    </div>
  )
}
