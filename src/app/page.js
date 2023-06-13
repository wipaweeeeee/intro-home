import Image from 'next/image'
import styles from './page.module.css'
import HeroHalf from '../components/HeroHalf'
import ContentHalf from '../components/ContentHalf'
import Button from '../components/Button'
import Tag from '../components/Tag'

export default function Home() {
  return (
    <main>
      <HeroHalf color="blue" image="welcomeHome">
        <h1 className="display-3 caps mb-10">Sunday Gathering</h1>
        <p className="mb-20">Sunday Experience is where everything done starts with the thought that the whole gathering is the message. Where 'welcome home" and you belong here is declared in such way to every individual that is causes them to say " I can belong there and I am going to take the next step in making that a reality."</p>
        <p className="mb-60">We would love for you to have the best experience so please let us know if you are thinking to join this Sunday in Bucharest or Cluj.</p>
        <Button variant="primary">plan your visit</Button>
      </HeroHalf>
      <ContentHalf color="red" image="city">
        <Tag variant="paper" className="mb-40">outreach</Tag>
        <h1 className="display-3 mb-40">I Love My City</h1>
        <p className="mb-60">“I Love My City” is an outreach expression of our church and on the second Saturday of each month, teams come together through groups to serve the city. This initiative is designed for people to demonstrate God’s love in practical ways by serving others through a variety of outreach projects. We want to come along side organisations that are meeting needs in the city so we can have a bigger impact.</p>
        <Button variant="secondary">get involved</Button>
      </ContentHalf>
    </main>
  )
}
