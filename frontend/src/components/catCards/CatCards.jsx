import React from 'react'
import "./CatCards.scss"
import {Link} from 'react-router-dom'

const CatCards = ({item}) => {
  return (
    <Link to='services?cat=design'>
    <div className="CatCard">
    <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCards