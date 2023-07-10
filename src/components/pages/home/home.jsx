import './home.scss';
import React from 'react';
import '../../base/base.scss';
import { Button } from 'react-bootstrap';

export const Home = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className='items col-md-6' key={index}>
          <div className='card card-style card-shadow card-hover-shadow'>
            <div className='card-body'>
              <div className='card-top' style={{ textAlign: 'center' }}>
                <img src={item.image} className='item-image' alt={item.name} />
              </div>
              
              <div className='card-bottom'>
                <h2 className='item-title'>{item.name}</h2>
                <p className='item-price'>{item.price}</p>
                <p className='item-description'>{item.details}</p>
                <a href={`${item.path}/${item.id}`}>
                  <Button variant='outline-secondary'>Details</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}