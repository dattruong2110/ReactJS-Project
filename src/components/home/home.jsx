import './home.css';
import React from 'react';
import '../base/base.css';
import { Button } from 'react-bootstrap';
// import { useState } from 'react';
// import { useEffect } from 'react';

export function CoursesItem({
  image,
  title,
  description,
}) {
  return (
    <div className='courses col-md-6'>
      <div className='card card-style card-shadow card-hover-shadow'>
        <div className='card-body'>
          <div className='card-top' style={{ textAlign: 'center' }}>
            <img src={image} className='course-image' alt={title} />
          </div>
          
          <div className='card-bottom'>
            <h2 className='course-title'>{title}</h2>
            <p className='course-description'>{description}</p>
            <Button variant='outline-info'>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function AppCounter() {
//   const orders = [200, 200, 300];
//   const total = orders.reduce((total, current) => total + current);
//   const [counter, setCounter] = useState(() => {
//     return total;
//   });

//   const handleIncrease = () => {
//     setCounter(counter + total);
//   };

//   return (
//     <div className='app-Counter' style={{ marginBottom: 20, textAlign: 'center' }}>
//       <h2>Counter Price</h2>
//       <h3>{ counter }</h3>
//       <Button onClick={handleIncrease} variant="outline-info">Increase</Button>
//     </div>
//   )
// }

// export function MountedContent() {
//   const [title, setTitle] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // document.title = title;
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       setPosts(posts);
//     })
//   });

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <ul>
//         {posts.map(post => ( 
//           <li key={ post.id }>{ post.title }</li>
//         ))}
//       </ul>
//     </div>
//   )
// }