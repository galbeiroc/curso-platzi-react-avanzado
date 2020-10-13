import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

function useCategoryData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-acg-cp4ksptuq.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoryData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 190
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <>
        {loading && <span>loading...</span>}
        <List fixed={fixed}>
          {
            categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
          }
        </List>
      </>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
