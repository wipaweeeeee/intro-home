import Image from 'next/image'
import styles from './page.module.css'
import HeroHalf from '../components/HeroHalf'
import Button from '../components/Button'

export default function Home() {
  return (
    <main>
      <HeroHalf color="blue">
        <h1 className="display-3 caps mb-10">Sunday Gathering</h1>
        <p className="mb-20">Sunday Experience is where everything done starts with the thought that the whole gathering is the message. Where 'welcome home" and you belong here is declared in such way to every individual that is causes them to say " I can belong there and I am going to take the next step in making that a reality."</p>
        <p className="mb-60">We would love for you to have the best experience so please let us know if you are thinking to join this Sunday in Bucharest or Cluj.</p>
        <Button variant="primary">plan your visit</Button>
      </HeroHalf>
    </main>
  )
}
