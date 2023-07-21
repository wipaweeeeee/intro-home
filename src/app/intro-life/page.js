'use client'

import { useState } from 'react';
import { useAppContext } from '../../config/Store';
import content from './content.js';
import HeroHalf from '../../components/HeroHalf'
import ContentHalf from '../../components/ContentHalf'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Banner from '../../components/Banner'
import Form from '../../components/Form'

export default function IntroLife() {

  const { appContext }  = useAppContext();
  let data = content[appContext.lang];

  const [ forms, setForms ] = useState({
    visit: false,
    outreach: false
  })

  return (
    <main>
      <HeroHalf color="blue" image="welcomeHome">
        <h1 className="display-3 caps mb-10">Sunday Gathering</h1>
        <p className="mb-20">Sunday Experience is where everything done starts with the thought that the whole gathering is the message. Where 'welcome home" and you belong here is declared in such way to every individual that is causes them to say " I can belong there and I am going to take the next step in making that a reality."</p>
        <p className="mb-60">We would love for you to have the best experience so please let us know if you are thinking to join this Sunday in Bucharest or Cluj.</p>
        <Button variant="primary" onClick={() => setForms({ ...forms, visit: true })}>plan your visit</Button>
      </HeroHalf>
      <Form 
        id="plan visit" 
        show={forms.visit} 
        handleClose={() => setForms({ ...forms, visit: false })}
        title={data.formVisitTitle}
        formTitle="plan your visit"
        desc={data.formVisitContent}
        locations
        cities
      />
      <ContentHalf color="red" image="city">
        <Tag variant="paper" className="mb-40">outreach</Tag>
        <h1 className="display-3 mb-40">I Love My City</h1>
        <p className="mb-60">“I Love My City” is an outreach expression of our church and on the second Saturday of each month, teams come together through groups to serve the city. This initiative is designed for people to demonstrate God’s love in practical ways by serving others through a variety of outreach projects. We want to come along side organisations that are meeting needs in the city so we can have a bigger impact.</p>
        <Button variant="secondary-light" onClick={() => setForms({ ...forms, outreach: true })}>get involved</Button>
      </ContentHalf>
      <Form 
        id="i love my city" 
        show={forms.outreach} 
        handleClose={() => setForms({ ...forms, outreach: false })}
        title={data.formOutreachTitle}
        formTitle="i love my city"
        desc={data.formOutreachContent}
        message
        cities
      />
      <Banner color="yellow-dark" icon="star">we don't babysit we raise leaders</Banner>
    </main>
  )
}
