import './home.css';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export function CoursesItem({
  image,
  title,
  description,
}) {
  return (
    <div className='courses col-md-6'>
      <img src={image} className='course-image' alt={title} />
      <h2 className='course-title'>{title}</h2>
      <p className='course-description'>{description}</p>
    </div>
  );
}

export function AppCounter() {
  const orders = [200, 200, 300];
  const total = orders.reduce((total, current) => total + current);
  const [counter, setCounter] = useState(() => {
    return total;
  });

  const handleIncrease = () => {
    setCounter(counter + total);
  };

  return (
    <div className='App' style={{ marginBottom: 20 }}>
      <h2>Counter Feature</h2>
      <h3>{ counter }</h3>
      <Button onClick={handleIncrease} variant="outline-info">Increase</Button>
    </div>
  )
}