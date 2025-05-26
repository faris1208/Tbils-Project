import React from 'react'
import VisaHero from './components/visa-hero'
import ChooseCountry from './components/choose-country'
import Assistance from './components/assistance'

export default function VisaApplication() {
  return (
    <div>
        <VisaHero />
        <ChooseCountry />
        <Assistance />
    </div>
  )
}
