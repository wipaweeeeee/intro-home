'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import Button from '../../components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import AnimateDiv from '../../components/AnimateDiv';

//TODO: add in correct links and correct address + service times

export default function Locations() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const router = useRouter();

  return ( 
      <AnimateDiv style={{display: 'flex'}}> 
        <div className={styles.leftRail}>
          <h1 className="display-3 caps">{data.titleOne}</h1>
          <h1 className="display-3 caps">{data.titleTwo}</h1>
        </div>
        <div className={styles.locationContainer}>
          <div className={styles.location}>
            <div className={styles.image}>
              <Image
                src={`/assets/images/bucharest.jpg`}
                alt={'bucharest'}
                width={556}
                height={547}
                priority
              />
            </div>
            <div className={styles.content}>
              <div className={styles.dot} />
              <div className={styles.details}>
                <h2 className="display-4 caps mb-10">{data.locationOne}</h2>
                <p className="body-2">{data.locationOneAddress}</p>
                <hr className={styles.line}/>
                <p className="body-2 mb-20">Service Times: <br /> {data.locationOneTimes}</p>
                <Button variant="primary" onClick={() => router.push('/bucharest')}>{data.locationOneCTA}</Button>
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.image}>
              <Image
                src={`/assets/images/cluj.jpg`}
                alt={'cluj'}
                width={556}
                height={547}
                priority
              />
            </div>
            <div className={styles.content}>
              <div className={styles.dot} />
              <div className={styles.details}>
                <h2 className="display-4 caps mb-10">{data.locationTwo}</h2>
                <p className="body-2">{data.locationTwoAddress}</p>
                <hr className={styles.line}/>
                <p className="body-2 mb-20">Service Times: <br /> {data.locationTwoTimes}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateDiv>
) }