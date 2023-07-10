import React from 'react';
import './content.scss'

export const Content = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div className='item-description' key={index}>
          <div className='item-title'>
            <h3>{item.name}</h3>
            <img src={item.image1} className='item-image' alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  )
}