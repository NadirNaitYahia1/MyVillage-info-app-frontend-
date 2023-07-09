import React from 'react'
import Accueil from '../components/Accueil'
import Home from '../components/Home'
import Services from '../components/Services'
import Sante from '../components/Sante'
import Apropos from '../components/Apropos'
const phome = () => {
  return (
    <div>
      <Accueil />
      <Home />
      <Services />
      <Sante />
      <Apropos />
    </div>
  )
}

export default phome
