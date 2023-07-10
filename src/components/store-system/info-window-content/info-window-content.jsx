import React from 'react';
import './info-window-content.scss';

export const InfoWindowContent = ({ store }) => {
  return (
    <>
      {store.map((store, index) => (
        <div className='info-window-content' key={index}>
          <h6 className='store-name'>{store.name}</h6>
          <hr class="hr" />
          <ul>
            <li>Address: {store.address}.</li>
            <li>Open at {store.open}.</li>
            <li>Closes at {store.close}.</li>
          </ul>
        </div>
      ))}
    </>
  )
}
