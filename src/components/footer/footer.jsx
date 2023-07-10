import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='bg-light text-center text-lg-start'>
            <div className='text-center p-3'>
                <a className='link-store' href='/store-system'>
                    <span>Find a store</span>
                </a>
                <p className='footer-resource'> &copy; Truong Tan Dat 2022</p>
            </div>
        </footer>
    )
}