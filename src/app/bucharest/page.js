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
import Banner from '../../components/Banner';

//TODO: add in correct links

export default function Bucharest() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];


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
      <Banner color="orange" icon="globe">a national family with local impact</Banner>
    </>
) }