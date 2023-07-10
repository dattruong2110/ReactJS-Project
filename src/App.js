import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { data, items, store } from './data/data';
import { Header } from './components/header/header';
import { Home } from './components/pages/home/home';
import { Login } from './components/pages/login/login';
import { Content } from './components/pages/content/content';
import { Footer } from './components/footer/footer';
import './App.scss';
import { StoreSystem } from './components/store-system/store-system';

function App() {
  const [myData, setMyData] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);
  const [myStore, setMyStore] = useState([]);

  const searchData = (searchKeys) => {
    const items = data.filter((item) => (item.name.toLowerCase().includes(searchKeys)) || item.name.toUpperCase().includes(searchKeys));
    setMyData(items);
  };

  useEffect(() => {
    setMyData(data);
    setMyStore(store);
    setItemDetails(items);
  }, []);

  return (
    <div className='App'>
      <Header searchData={searchData} />
      <div className="container">
        <div className='row'>
          <Routes>
            <Route path='/' element={<Home data={myData} />} />
            <Route path='/login' element={<Login />} />
            {data.map((item) => (
                <Route path={`${item.path}/${item.id}`} element={<Content items={itemDetails} />} />
            ))}
            <Route path='/store-system' element={<StoreSystem store={myStore} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;