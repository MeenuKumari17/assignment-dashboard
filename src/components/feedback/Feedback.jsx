import React from 'react'
import './feedback.scss'
import { Customers } from '../../feedback'

const Feedback = () => {
  return(
    <div className='detail'>
      {Customers.map((c) => (
        <>
        <div className='avatar'>
        <img src={c.img} />
        <h2>{c.customer}</h2>
        </div>
        <div className='rating'>
          <img src={c.star} />
          <h5>{c.body}</h5>
        
        </div>
        </>
      ))}
    </div>
  )
}

export default Feedback