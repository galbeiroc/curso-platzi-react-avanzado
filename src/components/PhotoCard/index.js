import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEAFULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEAFULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = !liked ? MdFavoriteBorder : MdFavorite

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/deatil/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
