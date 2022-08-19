import React from 'react';
import '../Header/Header.scss';

const Header = () => {
    return (
        <div className='header shadow-sm p-4 bg-body rounded mb-5'>
            <div className='container d-flex align-items-center justify-content-between'>
                <a className='header__headingLink' href="#">
                    <h2 className='header__heading'>Where in the world?</h2>
                </a>
                <a className='header__darkmodeLink' href="#">
                    <h5 className='header__darkMode'>Dark Mode</h5>
                </a>
            </div>
        </div>
    );
};

export default Header;