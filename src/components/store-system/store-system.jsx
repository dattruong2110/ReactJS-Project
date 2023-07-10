import React from 'react';
import './store-system.scss';
import { Map } from './map/map';

export const StoreSystem = ({ store }) => {
  return (
    <>
      <Map store={store} />
    </>
  )
}