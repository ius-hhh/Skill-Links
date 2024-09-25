import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Cards from '../../components/cards/Cards'
import { cards } from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map(
                card=>(<Cards item={card} key={card.id}/>)
        )}
      </Slide>
      <TrustedBy/>
    </div>
  )
}

export default Home