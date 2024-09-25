import React from 'react'
import "./Cards.scss"
import {Link} from 'react-router-dom'

const Cards = ({item}) => {
  return (
    <Link to='services?cat=design'>
    <div className="card">
    <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
    </div>
    </Link>
  )
}

export default Cards