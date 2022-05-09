import './App.css';
import React from 'react';
import Header from './components/header/header';
import { CoursesItem } from './components/home/home';
import { AppCounter } from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container '>
        <div className='row'>
          <CoursesItem
            image="https://www.obg.eu.com/img/technologies/react.png"
            title="This is my project with ReactJS"
            description="This is a project built using ReactJS"
          />

          <CoursesItem
            image="https://www.obg.eu.com/img/technologies/react.png"
            title="This is my project with ReactJS"
            description="This is a project built using ReactJS"
          />

          <CoursesItem
            image="https://www.obg.eu.com/img/technologies/react.png"
            title="This is my project with ReactJS"
            description="This is a project built using ReactJS"
          />
        </div>
      </div>
      <AppCounter />
      <Footer />
    </div>
  );
}
export default App;