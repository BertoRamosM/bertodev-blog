import React from 'react'
import style from './blogPage.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Personal</h1>
      <div className={style.content}>
        <CardList  />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage