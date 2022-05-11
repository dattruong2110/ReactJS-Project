import './header.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../base/responsive.css';
import { useState } from 'react';

export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='/'>
                <img src='https://www.alioze.com/wp-content/uploads/2016/11/react-js.png' alt='Navbar Logo' className='navbar-logo-img' />
            </a>

            <div className='navbar__pc feature'>
                <form className="form-inline">
                    <input className="form-control outline-info mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
                <Button className='btn btn-outline-info' style={{ margin: '0 10px' }}>Login</Button>
            </div>
        </nav>
    )
}