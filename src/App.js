import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'

import { GlobalStyles } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)
