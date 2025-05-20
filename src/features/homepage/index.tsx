import React from 'react'
import styles from "../homepage/styles.module.scss"
import HomepageHero from './components/hero'
import Logo from './components/logos'
import TicketHero from './components/ticket'
import WhyBuyFromTbils from './components/whybuy-from-tbils'
import HeroServices from './components/services'

export default function Homepage() {
  return (
    <div className={styles.wrapper}>
        <HomepageHero />
        <Logo />
        <TicketHero />
        <WhyBuyFromTbils />
        <HeroServices />
    </div>
  )
}
