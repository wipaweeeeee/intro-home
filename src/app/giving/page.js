'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import Button from '../../components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion'

//TODO: add in correct links

export default function Giving() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const [ showBank, setShowBank ] = useState(false);

  const variants = {
    visible: { opacity: 1, height: '116px', padding: '20px' },
    hidden: { opacity: 0, height: '0px', padding: '0px'  }
  }

  return ( 
    <div className={styles.givingPage}>
      <div className={styles.hero}>
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
        <Button variant="secondary-dark" className="mr-20" onClick={() => setShowBank(!showBank)}>{data.givingCTAsecondary}</Button>
        <Button variant="primary">{data.givingCTA}</Button>
      </div>
      <motion.div 
        variants={variants}
        className={styles.bankDetail}
        animate={ showBank ? "visible" : "hidden"}
      >
        <span>RON - RO08BTRLRONCRT0606987101</span>
        <span>EUR - RO55BTRLEURCRT0606987101</span>
        <span>GBP - RO13BTRLGBPCRT0606987101</span>
        <span>USD - RO59BTRLUSDCRT0606987101</span>
      </motion.div>
    </div>
) }