'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import AnimateDiv from '../../components/AnimateDiv';

//TODO: add in correct links

export default function Giving() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const router = useRouter();

  const [ showBank, setShowBank ] = useState(false);

  const variants = {
    visible: { opacity: 1, height: '116px', padding: '20px' },
    hidden: { opacity: 0, height: '0px', padding: '0px'  }
  }

  return ( 
    <div className={styles.givingPage}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1 className="display-2 caps mr-8">{data.givingTitle}</h1>
          <Image
                src={`/assets/images/heart.svg`}
                alt={'heart'}
                width={70}
                height={70}
            />
        </div>
        <p className="mb-60">{data.givingContent}</p>
        <Button variant="secondary-dark" className="mr-20" onClick={() => setShowBank(!showBank)}>{data.givingCTAsecondary}</Button>
        <Button variant="primary" onClick={() => router.push('')}>{data.givingCTA}</Button>
      </div>
      <motion.div 
        initial={false}
        variants={variants}
        className={styles.bankDetail}
        animate={ showBank ? "visible" : "hidden"}
      >
        <span>RON - RO08BTRLRONCRT0606987101</span>
        <span>EUR - RO55BTRLEURCRT0606987101</span>
        <span>GBP - RO13BTRLGBPCRT0606987101</span>
        <span>USD - RO59BTRLUSDCRT0606987101</span>
      </motion.div>
      <AnimateDiv>
        <div className={styles.content}>
          <p className={classNames(styles.title, "body-2")}>{data.optionTitle}</p>
          <div className={styles.options}>
            <div className={styles.option}>
              <h2 className="body-2 caps mb-10">{data.titheOption}</h2>
              <p>{data.titheContent}</p>
            </div>
            <div className={styles.option}>
              <h2 className="body-2 caps mb-10">{data.houseOption}</h2>
              <p>{data.houseContent}</p>
            </div>
            <div className={styles.option}>
              <h2 className="body-2 caps mb-10">{data.socialOption}</h2>
              <p>{data.socialContent}</p>
            </div>
          </div>
        </div>
        <div className={styles.download}>
          <div className={styles.image}> 
            <Image
                  src={`/assets/images/notebooks.jpg`}
                  alt={'notebooks'}
                  width={674}
                  height={1011}
              />
          </div>
          <div className={styles.downloadContent}>
            <p className="mb-60">{data.formContent}</p>
            <Button variant="secondary-dark">{data.formCTA}</Button>
          </div>
        </div>
        <Banner color="green" icon="heart">{data.banner}</Banner>
      </AnimateDiv>
    </div>
) }