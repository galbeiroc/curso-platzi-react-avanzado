import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'

import { GlobalStyles } from './Styles/GlobalStyles'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)
